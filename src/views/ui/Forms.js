import { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Forms = () => {

  const [proprietario, setProprietario] = useState("concessionaria")

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Nova Placa
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup> {/* Dados Gerais */}
                <legend>Dados Gerais</legend>
                <Row className="mt-3">
                  <Col xs="6">
                    <FormGroup>
                      <Label for="registro_artesp">Registro ARTESP</Label>
                      <Input
                        id="registro_artesp"
                        name="registro_artesp"
                        placeholder="Digite o numero do Registro Artesp ..."
                        type="number"
                        min="12" 
                        max="12"
                        />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="proprietario">Proprietário</Label>
                      <Input id="proprietario" name="proprietario" type="select" 
                              value={proprietario} onChange={texto => setProprietario(texto.target.value)}>
                        <option value="concessionaria">NOME DA CONCESSIONÁRIA</option>
                        <option value="particular">Particular</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  {
                    proprietario === "particular" ? 
                    <FormGroup>
                    <Label for="nome_proprietario">Proprietário</Label>
                    <Input
                      id="nome_proprietario"
                      name="nome_proprietario"
                      placeholder="Digite o nome do Proprietário ..."
                      type="text"
                      />
                  </FormGroup>
                    : null
                  }
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="img_01">Imagem 01</Label>
                      <Input id="img_01" name="img_01" type="file">
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="img_02">Imagem 02</Label>
                      <Input id="img_02" name="img_02" type="file">
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup> {/* Localização */}
                <legend>Localização</legend>
                <Row className="mt-3">
                  <Col>
                    <FormGroup>
                      <Label for="numero">Rodovia</Label>
                      <Input
                        id="numero"
                        name="numero"
                        placeholder="Digite o numero da Rodovia ..."
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="pista_ramo">Pista/Ramo</Label>
                      <Input id="pista_ramo" name="pista_ramo" type="select">
                        <option>Pista Simples</option>
                        <option selected>Pista Dupla</option>
                        <option>Ramo</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                    <Label for="ramo">Ramo</Label>
                    <Input
                      id="ramo"
                      name="ramo"
                      placeholder="Digite o numero do Ramo ..."
                      type="number"
                      min="1" 
                      max="6"
                      disabled
                    />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="sentido">Sentido</Label>
                      <Input id="sentido" name="sentido" type="select">
                        <option></option>
                        <option selected>Norte</option>
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
                      <Label for="localizacao">Localização (km)</Label>
                      <Input
                        id="localizacao"
                        name="localizacao"
                        placeholder="Km da placa ..."
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="latitude">Latitude</Label>
                      <Input
                        id="latitude"
                        name="latitude"
                        placeholder="-00,0000"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="longitude">Longitude</Label>
                      <Input
                        id="longitude"
                        name="longitude"
                        placeholder="-11,1111"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup> {/* Dados da Placa */}
                <legend>Dados da Placa</legend>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="sinal">Tipo de Sinal</Label>
                      <Input id="sinal" name="sinal" type="select">
                        <option selected>Regulamentação</option>
                        <option>Advertência</option>
                        <option>Educativa</option>
                        <option>Orientação</option>
                        <option>Identificação</option>
                        <option>Localização</option>
                        <option>Apoio Operacional</option>
                        <option>Serviços Auxiliares</option>    
                        <option>Dispositivos Auxiliares</option>                                
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="codigo">Código da Placa</Label>
                      <Input id="codigo" name="codigo" type="text" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="funcao">Função</Label>
                      <Input id="funcao" name="funcao" type="select">
                        <option selected>Pré-Sinalização</option>
                        <option>Confirmação de sentido</option>
                        <option>Distância</option>
                        <option>Diagramadas</option>
                        <option>Rodovias e Estradas</option>
                        <option>Municípios</option>
                        <option>Identificação Nominal</option>
                        <option>Limites Territoriais</option>    
                        <option>Pedágio</option>
                        <option>Identificação Quilométrica</option>
                        <option></option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs='2'>
                    <FormGroup>
                      <FormGroup check>
                        <Input name="radio1" type="radio" checked={true}/>
                        <Label check>
                          Simples
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col xs='2'>
                    <FormGroup>
                      <FormGroup check>
                        <Input name="radio1" type="radio" />
                        <Label check>
                          Composta
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="dimensoes">Dimensões</Label>
                      <Input
                          id="lado"
                          name="lado"
                          placeholder="lado"
                          type="number"
                        />
                      <Input
                          id="diâmetro"
                          name="diâmetro"
                          placeholder="diâmetro"
                          type="number"
                        />
                      <Input
                          id="altura"
                          name="altura"
                          placeholder="Altura"
                          type="number"
                        />
                      <Input
                        id="largura"
                        name="largura"
                        placeholder="largura"
                        type="number"
                      />                                     
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="posicionamento">Posicionamento na via</Label>
                      <Input id="posicionamento" name="posicionamento" type="select">
                        <option selected>Solo - Lado Direito</option>
                        <option>Solo - Lado Esquerdo</option>
                        <option>Semi-pórtico - Lado Direito</option>
                        <option>Semi-pórtico - Lado Esquerdo</option>
                        <option>Pórtico</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="implantacao">Data de Implantação</Label>
                      <Input
                        id="implantacao"
                        name="implantacao"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="operacao">Início de Operação</Label>
                      <Input
                        id="operacao"
                        name="operacao"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="material">Material</Label>
                      <Input id="material" name="material" type="select">
                        <option>Aço</option>
                        <option selected>Alumínio</option>
                        <option>Poliéster Reforçado com Fibra de Vidro - PRFV</option>
                        <option>Madeira Imunizada</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup> {/* Mensagem */}
                <legend>Mensagem</legend>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="linha01">Linha 01</Label>
                      <Input id="linha01" name="linha01" type="text" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="linha02">Linha 02</Label>
                      <Input id="linha02" name="linha02" type="text" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="linha03">Linha 03</Label>
                      <Input id="linha03" name="linha03" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="linha01">Linha 04</Label>
                      <Input id="linha01" name="linha01" type="text" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="linha02">Linha 05</Label>
                      <Input id="linha02" name="linha02" type="text" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="linha03">Linha 06</Label>
                      <Input id="linha03" name="linha03" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                <legend className="text-center mt-4">Películas</legend>
                  <Row>
                    <Col>
                      <FormGroup>
                        <h5>Fundo</h5>
                        <Label for="cor_fundo">Cor</Label>
                        <Input id="cor_fundo" name="cor_fundo" type="select">
                          <option selected>Verde</option>
                          <option>Amarelo</option>
                          <option>Azul</option>
                          <option>Marrom</option>
                          <option>Branco</option>
                        </Input>
                        <Label for="pelicula_fundo">Película</Label>
                        <Input id="pelicula_fundo" name="pelicula_fundo" type="select">
                          <option>Tipo I</option>
                          <option selected>Tipo III</option>
                          <option>Tipo IV</option>
                          <option>Tipo X</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <h5>Orla</h5>
                        <Label for="cor_orla">Cor</Label>
                        <Input id="cor_orla" name="cor_orla" type="select">
                          <option>Preto</option>
                          <option selected>Branco</option>
                        </Input>
                        <Label for="pelicula_orla">Película</Label>
                        <Input id="pelicula_orla" name="select" type="select">
                          <option>Tipo I</option>
                          <option selected>Tipo III</option>
                          <option>Tipo IV</option>
                          <option>Tipo X</option>     
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <h5>Tarja</h5>
                        <Label for="cor_tarja">Cor</Label>
                        <Input id="cor_tarja" name="cor_tarja" type="select">
                          <option>Preto</option>
                          <option selected>Branco</option>
                        </Input>
                        <Label for="pelicula_tarja">Película</Label>
                        <Input id="pelicula_tarja" name="pelicula_tarja" type="select">
                          <option>Tipo I</option>
                          <option selected>Tipo III</option>
                          <option>Tipo IV</option>
                          <option>Tipo X</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>  
                  <Row>
                    <Col>
                      <FormGroup>
                        <h5>Legenda</h5>
                        <Label for="cor_legenda">Cor</Label>
                        <Input id="cor_legenda" name="cor_legenda" type="select">
                          <option>Preto</option>
                          <option selected>Branco</option>
                        </Input>
                        <Label for="pelicula_legenda">Película</Label>
                        <Input id="pelicula_legenda" name="pelicula_legenda" type="select">
                          <option>Tipo I</option>
                          <option selected>Tipo III</option>
                          <option>Tipo IV</option>
                          <option>Tipo X</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <h5>Seta</h5>
                        <Label for="cor_seta">Cor</Label>
                        <Input id="cor_seta" name="cor_seta" type="select">
                          <option>Preto</option>
                          <option selected>Branco</option>
                        </Input>
                        <Label for="pelicula_seta">Película</Label>
                        <Input id="pelicula_seta" name="pelicula_seta" type="select">
                          <option>Tipo I</option>
                          <option selected>Tipo III</option>
                          <option>Tipo IV</option>
                          <option>Tipo X</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <h5>Pictograma</h5>
                        <Label for="cor_pictograma">Cor</Label>
                        <Input id="cor_pictograma" name="cor_pictograma" type="select">
                          <option>Preto</option>
                          <option selected>Branco</option>
                        </Input>
                        <Label for="pelicula_pictograma">Película</Label>
                        <Input id="pelicula_pictograma" name="pelicula_pictograma" type="select">
                          <option>Tipo I</option>
                          <option selected>Tipo III</option>
                          <option>Tipo IV</option>
                          <option>Tipo X</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </FormGroup>
              </FormGroup>

              <FormGroup> {/* Suportes */}
                <legend>Suportes</legend>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="material">Material</Label>
                      <Input id="material" name="material" type="select">
                        <option>Madeira Tratada</option>
                        <option>Perfil Metálico</option>
                        <option>Suporte Colapsível</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label for="postes">Nº de Postes</Label>
                      <Input
                        id="postes"
                        name="postes"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="espacamento">Espaçamento entre os Postes</Label>
                      <Input
                        id="espacamento"
                        name="espacamento"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label for="lado_a">lado a (cm)</Label>
                      <Input
                        id="lado_a"
                        name="lado_a"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label for="lado_b">lado b (cm)</Label>
                      <Input
                        id="lado_b"
                        name="lado_b"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <FormGroup>
                      <Label for="poste_implantacao">Data de Implantação</Label>
                      <Input id="poste_implantacao" name="poste_implantacao" type="date">
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="3">
                    <FormGroup>
                      <Label for="comprimento">Comprimento Poste</Label>
                      <Input
                        id="comprimento"
                        name="comprimento"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label for="profundidade">Profundidade Fundação</Label>
                      <Input
                        id="profundidade"
                        name="profundidade"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                        <Label for="tipo_fundacao">Tipo de Fundação</Label>
                      <Input id="tipo_fundacao" name="tipo_fundacao" type="text">
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="fabricante">Fabricante</Label>
                      <Input id="fabricante" name="fabricante" type="text">
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="modelo">Modelo</Label>
                      <Input id="modelo" name="modelo" type="text">
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="lote">Lote</Label>
                      <Input id="lote" name="lote" type="text">
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="certificado">Certificado</Label>
                      <Input id="certificado" name="certificado" type="text">
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="img_03">Imagem 03</Label>
                      <Input id="img_03" name="img_03" type="file">
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="img_04">Imagem 04</Label>
                      <Input id="img_04" name="img_04" type="file">
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>         
              </FormGroup>

              <Button>Enviar</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
