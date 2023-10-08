import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import Table from 'react-bootstrap/Table';
import 'reactflow/dist/style.css';
import { Container, Tooltip, OverlayTrigger, Modal, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { SYMPTOMS } from '../shared/symtoms'
import { graphql } from 'gatsby';
const { useCallback, useState } = React
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const minimapStyle = {
  height: 120,
};

const ContentModal = ({ show, handleClose, list }) => <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Pharmacy 药房</Modal.Title>
  </Modal.Header>
  <Modal.Body>

    {
      list.map((ee) => <div><Link to={`/?otid=${ee.node.otid}`}> {ee.node.name} {ee.node.otid} </Link></div>)
    }
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
const AboutPage = ({ data }) => {
  const formulaList = data?.allShanhanJson?.edges;
  const [displayModal, setDisplayModal] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const image = getImage('../../images/gatsby-astronaut.png');

  const getList = () => {

    console.log(formulaList.length)
    const checklist = ['OT94', 'OT7', 'OT2', 'OT1', 'OT23', 'OT29', 'OT18', 'OT45', 'OT2', 'OT59', 'OT31', 'OT22']
    return formulaList?.filter(({ node }) => checklist.includes(node.otid))
  }

  const [symptomChecklist, setSymptomChecklist] = useState({
    FEVER: false,
    SWEAT: false,
    SHAOYIN: false,
    VOMITTING: false,
    RUNNYNOSE: false,
    HEADACHE_BODY_PAIN: false,
    ADVERSION_COLD: false,
    ADVERSION_WIND: false,
    THIRSTY: false,
    YELLOW_PHELGM: false,
    WHITE_PHELGM: false,
  })
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <Layout>

      <div className="d-flex flex-column container my-5  justify-content-center align-items-center">

        <img src="/images/fever-1.jpg" className="img-fluid"
          onClick={
            () => setDisplayModal(true)
          }
        />
        <img src="/images/fever-2.jpg" className="img-fluid" onClick={
          () => setDisplayModal(true)
        } />
        <img src="/images/fever-3.jpg" className="img-fluid" onClick={
          () => setDisplayModal(true)
        } />
        <img src="/images/chronic_cough.png" className="img-fluid" onClick={
          () => setDisplayModal(true)
        } />
        <img src="/images/clause.png" className="img-fluid" onClick={
          () => setDisplayModal(true)
        } />
      </div>
      <ContentModal
        show={displayModal}
        handleClose={() => setDisplayModal(false)}
        list={getList()}
      />
    </Layout>
  )

}

export default AboutPage

export const Head = () => (
  <Seo title="About Gatsby Bootsrap 5 starter" />
)

export const query = graphql`
  query MyQuery {
    allShanhanJson {
      edges {
        node {
          id
          name
          description
          url
          formula
          otid
        }
      }
    }
  }
`;