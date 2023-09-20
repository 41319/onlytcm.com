import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Form from 'react-bootstrap/Form';
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { ReactTags } from 'react-tag-autocomplete'


const { useState, useCallback } = React; 
const IndexPage = () => {

  const [selected, setSelected] = useState([])

  const onAdd = useCallback(
    (newTag) => {
      setSelected([...selected, newTag])
    },
    [selected]
  )

  const onDelete = useCallback(
    (tagIndex) => {
      setSelected(selected.filter((_, i) => i !== tagIndex))
    },
    [selected]
  )

  const renderInput = ({ classNames, inputWidth, ...inputProps }) => {
    return <input className={classNames.input} style={{ width: inputWidth }} {...inputProps} />
  }
  return (
    <Layout>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">唯医搜索</h1>
          </div>
        </div>
        <div className="row">
        
          <ReactTags
            placeholderText="经方名称"
            labelText="Select countries"
            selected={selected}
            suggestions={[
              { value: 3, label: 'Bananas' },
              { value: 4, label: 'Mangos' },
              { value: 5, label: 'Lemons' },
              { value: 6, label: 'Apricots', disabled: true },
            ]}
            onAdd={onAdd}
            onDelete={onDelete}
            noOptionsText="No matching countries"
          />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)