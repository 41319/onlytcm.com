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
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { SYMPTOMS } from '../shared/symtoms'
const { useCallback, useState } = React
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const minimapStyle = {
  height: 120,
};

const AboutPage = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const image = getImage('../../images/gatsby-astronaut.png');
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
        <img src="/images/fever-1.jpg" className="img-fluid" />
        <img src="/images/fever-2.jpg" className="img-fluid" />
        <img src="/images/fever-3.jpg" className="img-fluid" />
        <img src="/images/chronic_cough.png" className="img-fluid" />
        <img src="/images/clause.png" className="img-fluid" />
      </div>
    </Layout>
  )

}

export default AboutPage

export const Head = () => (
  <Seo title="About Gatsby Bootsrap 5 starter" />
)