const ButtonComponent = function (propsObj) {
  console.log(propsObj);
  return (
    <div>
      <button>{propsObj.nameToShow}</button>
    </div>
  );
};
export default ButtonComponent;
