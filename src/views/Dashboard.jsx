/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "../assets/css/main.css";

// reactstrap components

// core components

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <iframe
            className="mapa"
            width="100%"
            height="480"
            src="https://charts.mongodb.com/charts-project-0-eaybw/embed/charts?id=658e2f4a-a629-492d-ab7c-40a862f62b1b&autorefresh=300&theme=dark"
            title="Mapa placas"
          ></iframe>
          <iframe
            className="mapa"
            width="100%"
            height="480"
            title="Gráfico contador"
            src="https://charts.mongodb.com/charts-project-0-eaybw/embed/charts?id=0e33056b-83d5-4fca-9ad5-e47510759631&autoRefresh=60&theme=dark"
          ></iframe>
        </div>
      </>
    );
  }
}

export default Dashboard;
