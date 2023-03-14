import React from "react";
import moment from "moment";
import config from "../../../config.json";

interface ICard {
  loading: boolean;
  data: any;
  error: string;
  active: any;
}
const Cards = ({ loading, data, error, active }: ICard) => {
  if (loading || error) return null;
  if (!data || !data.length) return "No data to display";
  return data.map((issue: any, index: number, array: any) => {
    return (
      <div
        key={index}
        className={`w-full p-2 w-1/${
            array.length > 3 ? "4" : array.length
          } md:w-1/${
            array.length > 3 ? "4" : array.length
          } sm:w-full min-w-max`}
      >
        <a href={issue.html_url} target="_blank">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 mr-2  group-hover:text-gray-200`}
                  style={{
                    color: config.age[active.index]?.color,
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              {issue.number}
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>{moment(issue.created_at).fromNow()}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });
};

export default Cards;
