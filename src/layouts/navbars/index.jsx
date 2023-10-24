import NavlinkActive from '@/routers/navlinkActive';

import './navbar.css';
const NavBar = () => {
  return (
    <>
      <ul className="display">
        <li className="thefirst">
          <NavlinkActive to=""> Home </NavlinkActive>
        </li>
        <li className="thefirst">
          <NavlinkActive to="AboutPage"> About </NavlinkActive>
        </li>
        <li className="thefirst">
          <NavlinkActive to="DetailPage"> DetailPage </NavlinkActive>
        </li>
        <li className="thefirst">
          <NavlinkActive to="useState"> useState</NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useState/ExerciseOneUseState">Exercise 1</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useState/ExerciseTwoUseState">Exercise 2</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useState/ExerciseThreeUseState">Exercise 3</NavlinkActive>
            </li>
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="useEffect"> useEffect</NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useEffect/ExerciseOneUseEffect">Exercise 1</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useEffect/ExerciseTwoUseEffect">Exercise 2</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useEffect/ExerciseThreeUseEffect">Exercise 3</NavlinkActive>
            </li>
          </ul>
        </li>

        <li className="thefirst">
          <NavlinkActive to="useRef"> useRef </NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useRef/ExerciseOneUseRef">Exercise 1</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useRef/ExerciseTwoUseRef">Exercise 2</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useRef/ExerciseThreeUseRef">Exercise 3</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useRef/ExerciseFourUseRef">Exercise 4</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useRef/ExerciseFiveUseRef">Exercise 5</NavlinkActive>
            </li>
            <li>
              <NavlinkActive to="useRef/ExerciseSixUseRef">Exercise 6</NavlinkActive>
            </li>
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="useReducer"> useReducer </NavlinkActive>
          <ul className="sub-menu2">
            <li>
              <NavlinkActive to="useReducer/ExerciseOneUseReducer/">Exercise 1</NavlinkActive>
            </li>
            {/* <li>
              <NavlinkActive to="useRef/bai2UseRef">Exercise 2</NavlinkActive>
            </li> */}
          </ul>
        </li>
        <li className="thefirst">
          <NavlinkActive to="LoginPage"> Login </NavlinkActive>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
