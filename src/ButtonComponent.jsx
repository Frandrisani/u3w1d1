const ButtonComponent = function (propsObj) {
  console.log(propsObj);
  return (
    <div>
      <button className={propsObj.className}>{propsObj.nameToShow}</button>
    </div>
  );
};
export default ButtonComponent;
