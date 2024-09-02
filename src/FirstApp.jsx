import { PropTypes } from "prop-types";

export const FirstApp = ( {title, subtitle} ) => {

  // if (!title) {
  //   throw new Error('Title no existe!');
  // }

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes ={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps ={
  title: "No hay titulo",
  subtitle: "No hay subtit"
}

export default FirstApp
