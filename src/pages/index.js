import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

// Images
import Logo from "../images/logo.png";
import Cancel from "../images/cancel.png";
import CancelDisable from "../images/cancel-disable.png";
import Check from "../images/check.png";
import CheckDisable from "../images/check-disable.png";
import Delete from "../images/delete.png";
import AddIcon from "../images/add-icon.png";
import AddSolidIcon from "../images/add-icon-solid.png";
import Github from "../images/github-icon.svg";

// ! Page Styles Start

// Main Page Styles
const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "90vh",
};

// Logo Resposive Styles
const LogoComponent = styled.img`
  /* Desktop */
  width: 600px;

  /* Phone */
  @media (max-width: 480px) {
    width: 300px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
  }
`;

// Paragraph Resposive Styles
const Paragraph = styled.p`
  /* Desktop */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  font-size: 1.2rem;
  text-align: center;

  /* Phone */
  @media (max-width: 480px) {
    width: 300px;
    font-size: 0.7rem;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 500px;
    font-size: 1.1rem;
  }
`;

// Github Brand
const GithubBrand = styled.a`
  font-family: "Quicksand", sans-serif;
  /* Global */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.9rem;
  margin-left: 1rem;
  padding: 0.5rem;
  background-color: #161616;
  border-radius: 8px;
  color: white;
  text-decoration: none;

  width: 140px;
`;

// Form Container Styles
const FormContainerStyles = styled.div`
  /* Global */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Desktop */
  height: 8vh;
`;

// Input Resposive Styles
const InputComponent = styled.input`
  /* Global */
  padding: 1rem;
  border: 2.5px solid #a8a8a8;
  border-radius: 20px;
  outline: none;
  font-size: 1rem;
  box-shadow: 2px 2px 5px 2px #0000001a;

  /* Desktop */
  width: 400px;
  height: 20px;

  /* Phone */
  @media (max-width: 480px) {
    width: 200px;
    height: 12px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 300px;
    height: 15px;
  }

  /* Focus */
  :focus {
    border: 2.5px solid #902bcf;
  }

  /* Placeholder */
  ::placeholder {
    color: #a8a8a8;
    font-size: 1rem;
  }
`;

// AddButton Resposive Styles
const AddButton = styled.button`
  /* Global */
  margin: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${AddIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  :hover {
    background-image: url(${AddSolidIcon});
    transition: 0.5s;
  }

  /* Desktop */
  width: 50px;
  height: 50px;

  /* Phone */
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

// Filters Container Styles
const FiltersContainer = styled.div`
  /* Global */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.5rem 0;

  /* Desktop */
  width: 500px;

  /* Phone */
  @media (max-width: 480px) {
    width: 300px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 400px;
  }
`;

// FilterButton Resposive Styles
const FilterButton = styled.button`
  /* Global */
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
  background-color: #f5f5f5;
  color: #902bcf;
  box-shadow: 2px 2px 5px 2px #0000001a;

  /* focus */
  :focus {
    background-color: #902bcf;
    color: #f5f5f5;
    transition: 0.5s;
  }

  /* Desktop */
  width: 140px;
  height: 40px;

  /* Phone */
  @media (max-width: 480px) {
    width: 100px;
    height: 30px;
    font-size: 0.8rem;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 120px;
    height: 35px;
    font-size: 0.9rem;
  }
`;

// Tasks List Resposive Styles
const TasksList = styled.ul`
  /* Global */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 0;
  list-style: none;
  height: 35vh;
  overflow-y: auto;

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

// Task Container Resposive Styles
const TaskContainer = styled.div`
  /* Global */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;

  /* Desktop */
  width: 70%;
`;

// Task Resposive Styles
const Task = styled.li`
  /* Global */
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  /* margin: 0.5rem 0; */
  box-shadow: 2px 2px 5px 2px #0000001a;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #ffff;

  /* click in task change border permanently */
  :active {
    border: 2px solid #902bcf;
  }

  :focus {
    border: 2px solid #902bcf;
  }

  /* Desktop */
  width: 100%;
  height: 80px;

  /* Phone */
  @media (max-width: 480px) {
    width: 100%;
    height: 60px;
    font-size: 1rem;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 70px;
    font-size: 1.1rem;
  }
`;

// CompleteButton Resposive Styles
const CompleteButton = styled.a`
  /* Global */
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  background-image: url(${Check});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;

  /* Validate with js , if complete is true */
  ${(props) =>
    props.complete &&
    css`
      background-image: url(${CheckDisable});
    `}

  /* Desktop */
  width: 40px;
  height: 70%;

  /* Phone */
  @media (max-width: 480px) {
    width: 30px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 35px;
  }
`;

// CancelButton Resposive Styles
const CancelButton = styled.span`
  /* Global */
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;
  background-image: url(${CancelDisable});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;

  /* Validate with js , if complete is true */
  ${(props) =>
    props.complete &&
    css`
      background-image: url(${Cancel});
    `}

  /* Desktop */
  width: 40px;
  height: 70%;

  /* Phone */
  @media (max-width: 480px) {
    width: 30px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 30px;
  }
`;

// RemoveButton Resposive Styles
const RemoveButton = styled.span`
  /* Global */
  cursor: pointer;

  /* Desktop */
  width: 80px;
  height: 70%;

  /* Phone */
  @media (max-width: 480px) {
    width: 50px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60px;
  }
`;

// ! Page Styles End

// ! Page Logic Start

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
      <Paragraph>
        Applicatión created by:
        <GithubBrand href="https://github.com/JOEL18VEGAS" target={"_blank"}>
          <img src={Github} alt="github" />
          <span>JOEL VEGAS</span>
        </GithubBrand>
      </Paragraph>

      {/* Form */}
      <FormContainerStyles>
        <InputComponent
          onChange={handleInputChange}
          value={task}
          type="text"
          placeholder="Add Task..."
        />
        <AddButton disabled={task.length === 0} onClick={() => addTask()} />
      </FormContainerStyles>

      {/* Filters */}
      <FiltersContainer>
        <FilterButton onClick={() => activeTodos()}>Active</FilterButton>
        <FilterButton onClick={() => completedTodos()}>Completed</FilterButton>
        <FilterButton onClick={() => allTodos()}>All</FilterButton>
      </FiltersContainer>

      {/* Task List */}

      <TasksList>
        {filter.map((task) => (
          <TaskContainer>
            <Task key={task.id}>
              <CompleteButton
                complete={task.completed}
                onClick={() => completeTask(task.id)}
              />
              <span>{task.name}</span>

              <CancelButton
                complete={task.completed}
                disabled={!task.completed}
                onClick={() => removeTask(task.id)}
              />
            </Task>
          </TaskContainer>
        ))}
      </TasksList>

      {/* Delete All Completed */}

      <RemoveButton onClick={() => clearTasks()}>
        <img src={Delete} width="100%" alt="Delete All Completed" />
      </RemoveButton>

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

export const Head = () => <title>Task App</title>;
