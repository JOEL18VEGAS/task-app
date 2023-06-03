import * as React from "react";
import { useState } from "react";
import Logo from "../images/logo.png";
import Cancel from "../images/cancel.png";
import Check from "../images/check.png";
import Delete from "../images/delete.png";
import styled from "styled-components";

// ! Page Styles Start

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "90vh",
};

const paragraphStyles = {
  marginBottom: 48,
};

const InputComponent = styled.input`
  /* Global */
  padding: 1%;
  margin: 1%;
  border: none;
  border-radius: 5px;
  outline: none;

  /* Desktop */
  width: 700px;

  /* Phone */
  @media (max-width: 480px) {
    width: 300px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
  }

  /* Focus */
  :focus {
    box-shadow: 0 0 0 2px #ff23;
  }

  /* Placeholder */
  ::placeholder {
    color: #ff23;
  }

  /* Text */
  color: #ff23;


`;

// Logo Resposive Styles
const LogoComponent = styled.img`
  /* Desktop */
  width: 700px;

  /* Phone */
  @media (max-width: 480px) {
    width: 300px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
  }
`;

const TasksList = styled.ul`
  /* Global */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 0;
  list-style: none;
  background-color: #ff23;
  height: 40vh;
  overflow-y: scroll;

  /* Hide ScrollBar */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Desktop */
  width: 700px;

  /* Phone */
  @media (max-width: 480px) {
    width: 300px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
  }
`;

const Task = styled.li`

`;

// ! Page Styles End

const IndexPage = () => {
  // Tasks State
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState([]);
  const [task, setTask] = useState("");

  // Add Task
  const addTask = () => {
    // Create ID
    const id = Math.floor(Math.random() * 10000) + 1;

    // Add Task to State
    setTasks([{ id: id, name: task, completed: false }, ...tasks]);

    // Reset Form
    setTask("");
  };

  // Remove Task
  const removeTask = (id) => {
    // Filter Tasks
    const newTasks = tasks.filter((task) => task.id !== id);

    // Update Tasks
    setTasks(newTasks);
  };

  // Complete Task
  const completeTask = (id) => {
    // Map Tasks
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    // Update Tasks
    setTasks(newTasks);
  };

  // Clear Tasks
  const clearTasks = () => {
    // Filter Tasks
    const newTasks = tasks.filter((task) => !task.completed);

    // Update Tasks
    setTasks(newTasks);
  };

  // All Todos
  const allTodos = () => {
    // Update Tasks
    setFilter(tasks);
  };

  // Active Todos
  const activeTodos = () => {
    // Filter Tasks
    const filterTasks = tasks.filter((task) => !task.completed);

    // Update Tasks
    setFilter(filterTasks);
  };

  // Completed Todos
  const completedTodos = () => {
    // Filter Tasks
    const filterTasks = tasks.filter((task) => task.completed);

    // Update Tasks
    setFilter(filterTasks);
  };

  // Handle Input Change
  const handleInputChange = (event) => {
    // Update Task
    setTask(event.target.value);
  };

  React.useEffect(() => {
    setFilter(tasks);
  }, [tasks]);

  return (
    <main style={pageStyles}>
      {/* Logo */}
      <div>
        <LogoComponent src={Logo} alt="Task App" width={700} />
      </div>

      {/* Title */}
      <p style={paragraphStyles}>
        Applicatión created by:{" "}
        <a href="https://github.com/JOEL18VEGAS" target={"_blank"}>
          JOEL VEGAS
        </a>
      </p>

      {/* Form */}
      <div>
        <InputComponent
          onChange={handleInputChange}
          value={task}
          type="text"
          placeholder="Task"
        />
        <button onClick={() => addTask()}>Add</button>
      </div>

      {/* Filters */}
      <div>
        <button onClick={() => activeTodos()}>Active</button>
        <button onClick={() => completedTodos()}>Completed</button>
        <button onClick={() => allTodos()}>All</button>
      </div>

      {/* Task List */}
      <div>
        <TasksList>
          {filter.map((task) => (
            <li key={task.id}>
              <button onClick={() => completeTask(task.id)}>
                <img src={Check} alt="Task App" />
              </button>
              <span>{task.name}</span>
              <button
                disabled={!task.completed}
                onClick={() => removeTask(task.id)}
              >
                <img src={Cancel} alt="Task App" />
              </button>
            </li>
          ))}
        </TasksList>
      </div>

      {/* Delete All Completed */}
      <div>
        <button onClick={() => clearTasks()}>
          <img src={Delete} alt="Task App" />
        </button>
      </div>

      {/* Footer */}
      <div>
        <p>
          Made From <span>🇻🇪</span> and <span>🇨🇴</span> with <span>❤️</span>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
