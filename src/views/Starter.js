import { Col, Row } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";



const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col>
          <TopCards
            bg="bg-light-success text-success"
            title="Total"
            subtitle="Total de Placas"
            earning="21.000"
            icon="bi bi-wallet"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-light-danger text-danger"
            title="regulamentacao"
            subtitle="Regulamentação"
            earning="7.000"
            icon="bi bi-coin"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Advertência"
            earning="3.500"
            icon="bi bi-basket3"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-light-info text-into"
            title="orientacao"
            subtitle="Orientação"
            earning="7.000"
            icon="bi bi-bag"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-light-info text-into"
            title="indicativa"
            subtitle="Indicativa"
            earning="3.500"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
