import "./App.css";
import style from "./Heading.module.css";
import css from "./Paragraph.module.css";
import Container from "./Container";

function App() {
  return (
    <>
      <Container>
        <div className={style.heading}>This is Heading 1</div>
        <div className={`${css.paragraph} ${css.onHover}`}> This is Para 1</div>
      </Container>
      <Container>
        <div className={style.heading}>This is Heading 2</div>
        <div className={`${css.paragraph} ${css.onHover}`}> This is Para 2</div>
      </Container>
    </>
  );
}

export default App;
