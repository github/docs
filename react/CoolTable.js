const React = require('react')
const ReactDOM = require('react-dom')

const MUIDataTable = require("mui-datatables").default;

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};

const CoolTable = function () {
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-CoolTable')

  for (const componentContainer of componentContainers) {
    ReactDOM.render(React.createElement(CoolTable, {}, componentContainer.children[0].innerText), componentContainer)
  }
}


module.exports = CoolTable
