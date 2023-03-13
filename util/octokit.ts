import { Octokit } from "octokit";
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_PAT,
});
console.log(
  "🚀 ~ file: octokit.ts:5 ~ process.env.NEXT_PUBLIC_PAT:",
  process.env.NEXT_PUBLIC_PAT
);


export default octokit;
