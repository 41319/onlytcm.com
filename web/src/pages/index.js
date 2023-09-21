import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Form from 'react-bootstrap/Form';
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { ReactTags } from 'react-tag-autocomplete'
import { graphql } from 'gatsby';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from 'react-bootstrap'

const { useState, useCallback, useEffect } = React;
const IndexPage = ({ data }) => {
  const formulaList = data?.allShanhanJson?.edges;
  const [selected, setSelected] = useState([])
  const [queriedData, setQueriedData] = useState(formulaList)
  const [searchQuery, setSearchQuery] = useState([])
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const _suggestions = formulaList?.map(({ node }) => ({ value: node.name, label: node.name }))
    setSuggestions(_suggestions)
  }, [])


  useEffect(() => {
    console.log(selected)
    const _queried = formulaList?.filter(({ node }) => {

      const needles = [
        node.name,
        ...node.tags || []
      ]
      if (node.tags.length) {

        console.log(needles)
      }



      const found = selected.find(sel => needles.includes(sel?.value))
      return !!found;
    })
    setQueriedData(_queried)
  }, [selected])

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
      <section className="py-5 container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light  text-center">唯医搜索</h1>
          </div>
        </div>


        <ReactTags
          placeholderText="经方名称， 病症， 病名"
          labelText="Select"
          selected={selected}
          suggestions={suggestions}
          onAdd={onAdd}
          onDelete={onDelete}
          noOptionsText="No matchin"
          allowNew={true}
        />
        <br />

        <ListGroup>

          {
            searchQuery && queriedData.map(({ node }) => {
              return <ListGroup.Item>
                <div className="">
                  <div className="fw-bold"> {node.name} </div>
                  {node.description}
                </div>
                {
                  node?.url && <a target="_blank" href={node?.url}>Watch</a>
                }
              </ListGroup.Item>
            })
          }
        </ListGroup>

      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
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
          tags
        }
      }
    }
  }
`;