interface ITab {
  ages: any;
  setActive: Function;
  active: any;
  loading: boolean;
  error: string;
}
const Tab = ({ active, loading, error, ages, setActive }: ITab) => {
  if (loading || error || !Object.keys(ages).length) return null;
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-gray-600 font-semibold text-lg">Open Issues by age</p>
      <ul className="w-full sm:w-4/5 text-xs sm:text-sm justify-end items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
        {Object.keys(ages).map((age: any, index: number) => {
          return (
            <li key={index}>
              <button
                onClick={() =>
                  setActive({
                    title: age,
                    index,
                  })
                }
                className={`px-4 py-2 ${
                  active.title === age
                    ? "bg-indigo-500 text-gray-100"
                    : "bg-gray-200 text-gray-700"
                } rounded-full text-sm  hover:bg-indigo-700 hover:text-gray-200`}
              >
                {age} - {ages[age].length} Issues
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
