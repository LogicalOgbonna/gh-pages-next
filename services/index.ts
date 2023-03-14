import moment from "moment";
import octokit from "../util/octokit";
import config from "../config.json";

export const getIssues = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "bimodalconsulting",
    repo: "BiMo-project",
    state: "open",
  });

  const ages = config.age.map((age) => parseInt(age.title.split(" ")[0], 10));
  const maxAge = Math.max(...ages);

  const data: any = {};
  const agesData: any = {};
  response.data.forEach(
    ({
      id,
      updated_at,
      created_at,
      number,
      state,
      title,
      url,
      user,
      html_url,
    }) => {
      let printed = false;
      for (let i = 0; i < config.age.length; i++) {
        const dayTitle = config.age[i].title;
        const day = parseInt(dayTitle.split(" ")[0], 10);
        const now = moment();
        const data_before = moment(created_at);
        const dif = now.diff(data_before, "d");
        if (day <= dif) {
          if (agesData[dayTitle]) {
            agesData[dayTitle].push({
              id,
              updated_at,
              created_at,
              number,
              state,
              title,
              url,
              user,
              html_url,
            });
          } else {
            agesData[dayTitle] = [
              {
                id,
                updated_at,
                created_at,
                number,
                state,
                title,
                url,
                user,
                html_url,
              },
            ];
          }
          printed = true;
          break;
        }
      }
      if (!printed) {
        if (agesData[`Above ${maxAge}`]) {
          agesData[`Above ${maxAge} days`].push({
            id,
            updated_at,
            created_at,
            number,
            state,
            title,
            url,
            user,
            html_url,
          });
        } else {
          agesData[`Above ${maxAge} days`] = [
            {
              id,
              updated_at,
              created_at,
              number,
              state,
              title,
              url,
              user,
              html_url,
            },
          ];
        }
      }
    }
  );

  data["ages"] = agesData;
  return data;
};

// export const getIssues = async () => {
//     const response = await octokit.request(
//       "GET /orgs/{org}/code-scanning/alerts",
//       {
//         org: "strataconsulting",
//       }
//     );

//     const ages = config.age.map((age) => parseInt(age.title.split(" ")[0], 10));
//     const maxAge = Math.max(...ages);

//     const data: any = [];
//     const agesData: any = {};
//     response.data.forEach(
//       ({ updated_at, created_at, number, state, url, html_url, repository }) => {
//         let printed = false;
//         for (let i = 0; i < config.age.length; i++) {
//           const dayTitle = config.age[i].title;
//           const day = parseInt(dayTitle.split(" ")[0], 10);
//           const now = moment();
//           const data_before = moment(created_at);
//           const dif = now.diff(data_before, "d");
//           if (day <= dif) {
//             if (agesData[dayTitle]) {
//               agesData[dayTitle].push({
//                 updated_at,
//                 created_at,
//                 number,
//                 state,
//                 url,
//                 html_url,
//               });
//             } else {
//               agesData[dayTitle] = [
//                 {
//                   updated_at,
//                   created_at,
//                   number,
//                   state,
//                   url,
//                   html_url,
//                 },
//               ];
//             }
//             printed = true;
//             break;
//           }
//         }
//         if (!printed) {
//           if (agesData[`Above ${maxAge}`]) {
//             agesData[`Above ${maxAge}`].push({
//               updated_at,
//               created_at,
//               number,
//               state,
//               url,
//               html_url,
//             });
//           } else {
//             agesData[`Above ${maxAge}`] = [
//               {
//                 updated_at,
//                 created_at,
//                 number,
//                 state,
//                 url,
//                 html_url,
//               },
//             ];
//           }
//         }
//       }
//     );

//     data["ages"] = agesData;
//     return data;
//   };
