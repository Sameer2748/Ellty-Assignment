import { useState } from "react";

const App = () => {
  const [Pages, setPages] = useState([
    {
      id: 0,
      title: "Task 1",
      Todos: [
        { title: "List Created", isChecked: false },
        { title: "Addded Styling", isChecked: false },
        { title: "Pushed to github", isChecked: false },
        { title: "Deployed to vercel", isChecked: false },
      ],
      isChecked: false,
    }
  ]);

  const handlePageCheck = (id: number) => {
    const page = Pages[id];
    console.log(page);
    page.isChecked = !page.isChecked;
    if (page.isChecked) {
      page.Todos.forEach((todo) => (todo.isChecked = true));
    } else {
      page.Todos.forEach((todo) => (todo.isChecked = false));
    }
    setPages([...Pages]);
  };
  const handleTodoCheck = (pageId: number, todoId: number) => {
    const page = Pages[pageId];
    console.log(page);

    page.Todos[todoId].isChecked = !page.Todos[todoId].isChecked;
    const lenthChecked = page.Todos.filter((todo) => todo.isChecked).length;

    if (lenthChecked === page.Todos.length) {
      page.isChecked = true;
    } else {
      page.isChecked = false;
    }
    setPages([...Pages]);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl px-4 sm:px-8">
        <div className="mt-4 border border-gray-400 p-4 rounded-xl bg-white"  style={{boxShadow: "0px 10px 27px -4px rgba(0,0,0,0.75)"}}>
          {Pages.map((page, index) => (
            <div key={index} className="w-[380px] pl-3 pr-3 pt-2 pb-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl  text-gray-800 font-extralight">{page.title}</h2>
                <div
                  className="relative cursor-pointer"
                  onClick={() => handlePageCheck(index)}
                >
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className="peer appearance-none h-6 w-6 border-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-none  focus:outline-none"
                    checked={page.isChecked}
                    readOnly
                    onClick={() => handlePageCheck(index)}
                  />
                  {/* Custom Tick Mark */}
                  <span className="absolute inset-0 -top-[5px] flex items-center justify-center text-white opacity-0 peer-checked:opacity-100">
                    ✓
                  </span>
                </div>
              </div>
              <div className="w-[100%] h-[1px] bg-gray-300" />
              <ul className="mt-4">
                {page.Todos.map((todo, index) => (
                  <li key={index} className="flex justify-between pb-6 ">
                    <span className="font-extralight text-lg	">{todo.title}</span>
                    <div
                  className="relative cursor-pointer"
                  onClick={() => handleTodoCheck(page.id, index)}
                >
                    <input
                      type="checkbox"
                      className="peer appearance-none h-6 w-6  border-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-none  focus:outline-none"
                      checked={todo.isChecked}
                      readOnly
                      onClick={() => handleTodoCheck(page.id, index)}
                    />
                    <span className="absolute inset-0 -top-[5px] flex items-center justify-center text-white opacity-0 peer-checked:opacity-100">
                    ✓
                  </span>
                  </div>
                  </li>
                ))}
              </ul>
              <div className="w-[100%] h-[1px] bg-gray-300" />
              <button className="w-full h-[40px] bg-yellow-400 rounded mt-4 font-extralight hover:text-xl" onClick={() => {
                const page = Pages[index];
                console.log(page);
                page.isChecked = true;
                if (page.isChecked) {
                  page.Todos.forEach((todo) => (todo.isChecked = true));
                } else {
                  page.Todos.forEach((todo) => (todo.isChecked = false));
                }
                setPages([...Pages]);
              }}>
                Done
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
