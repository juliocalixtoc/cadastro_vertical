import { 
  Row, 
  Col, 
  Input, 
  FormGroup, 
  Label,
  Button, 
  Card, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  Table 
} from "reactstrap";


const tableData = [
  {
    ra: "12345678909",
    tipo_funcao: "Regulamentação",
    rodovia: "SP-280",
    km: "35+567",
    sentido: "N",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Advertência",
    rodovia: "SP-280",
    km: "35+567",
    sentido: "S",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Orientação - Pré-sinalização",
    rodovia: "SP-280",
    km: "35+567",
    sentido: "L",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Educativa",
    rodovia: "SP-280",
    km: "35+567",
    sentido: "O",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Orientação - Confirmação de Sentido",
    rodovia: "SP-021",
    km: "35+567",
    sentido: "I",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Apoio Operacional",
    rodovia: "SP-280",
    km: "35+567",
    sentido: "N",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Serviços Auxiliares",
    rodovia: "SP-021",
    km: "35+567",
    sentido: "E",
    budget: "5,00 x 2,00",
  },
  {
    ra: "12345678909",
    tipo_funcao: "Dispositivos Auxiliares",
    rodovia: "SP-280",
    km: "35+567",
    sentido: "N",
    budget: "5,00 x 2,00",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Cadastro de Placas</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Ultima Atualização: 01 de janeiro de 2000
          </CardSubtitle>
          
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">RA</Label>
                <Input
                  id="ra"
                  name="ra"
                  placeholder="Pesquisar ..."
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Proprietário</Label>
                <Input
                  id="proprietario"
                  name="proprietario"
                  placeholder="Pesquisar ..."
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Rodovia</Label>
                <Input
                  id="rodovia"
                  name="rodovia"
                  placeholder="Pesquisar ..."
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Sentido</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option></option>
                  <option>Norte</option>
                  <option>Sul</option>
                  <option>Leste</option>
                  <option>Oeste</option>
                  <option>Interna</option>
                  <option>Externa</option>                  
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">km inicial</Label>
                <Input
                  id="km"
                  name="km"
                  placeholder="km ..."
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">km final</Label>
                <Input
                  id="km"
                  name="km"
                  placeholder="km ..."
                  type="number"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Tipo/Função</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option></option>
                  <option>Regulamentação</option>
                  <option>Advertência</option>
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Mensagem</Label>
                <Input
                  id="mensagem"
                  name="mensagem"
                  placeholder="Pesquisar ..."
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row> {/* Botão Pesquisar */}
            <div align='end'>
              <Button className="btn mx-3" color="primary">
                Pesquisar
              </Button>
              <Button className="btn" color="dark">Filtros Avançados</Button>
            </div>
          </Row>

          <Table className="no-wrap mt-5 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>RA</th>
                <th>Tipo/Função</th>

                <th>Rodovia</th>
                <th>Km</th>
                <th>Sentido</th>
                <th>Dimensões</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata) => (
                <tr className="border-top">
                  <td>{tdata.ra}</td>
                  <td>{tdata.tipo_funcao}</td>
                  <td>{tdata.rodovia}</td>
                  <td>{tdata.km}</td>
                  <td>{tdata.sentido}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
