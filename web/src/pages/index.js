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
const IndexPage = ({ data, location }) => {
  const formulaList = data?.allShanhanJson?.edges;
  const [selected, setSelected] = useState([])
  const [queriedData, setQueriedData] = useState(formulaList)
  const [searchQuery, setSearchQuery] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [videoNumber, setVideoNumber] = useState(0)
  const params = new URLSearchParams(location.search);
  const number = params.get("otid");

  useEffect(() => {
    const _suggestions = formulaList?.map(({ node }) => ({ value: node.otid?.toLowerCase(), label: `${node.name}` }))
    setSuggestions(_suggestions)
  }, [])

  useEffect(() => {
    const deeplink = suggestions.find(s => s?.value === number)
    if (deeplink) {
      setSelected([deeplink])
    }
  }, [number, suggestions])

  useEffect(() => {
    const _queried = selected.length ? formulaList?.filter(({ node }) => {
      const needles = [
        node.name,
        node.description,

      ]
        .map(e => e)
      const found = selected.find(sel => needles.find(n => n.includes(sel?.label)))
      return !!found;
    }) : formulaList
    setQueriedData(_queried)
    setVideoNumber(_queried.reduce((prev, next) => {
      if (next?.node?.url) {
        return prev + 1
      }
      return prev;
    }, 0))
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

  const ListView = ({ list, title }) => <>

    <ListGroup>
      {`${list.length} 答案`}
      {
        list
          .map(({ node }) => {
            return <ListGroup.Item>
              <div className="">
                <div className="fw-bold"> {node.name} {node?.otid}</div>
                {node.description}
                <br />
                <br />
                {node.formula}
              </div>
              {
                node?.url && <a target="_blank" href={node?.url}>看视频</a>
              }
              <div className="text-important">
              {
                node?.important
              }
              </div>
            </ListGroup.Item>
          })
      }
    </ListGroup>
  </>

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
          react-tag-autocomplete={true}
          placeholderText="经方名称， 病症， 病名"
          labelText="Select"
          selected={selected}
          suggestions={suggestions}
          onAdd={onAdd}
          onDelete={onDelete}
          noOptionsText=""
          allowNew={true}
        />
        <br />

        <h3> Exact Search </h3>
        {
          number && <ListView
            title="Exact Search"
            list={formulaList.filter(({ node }) => node?.otid?.toLowerCase() === number.toLowerCase())}
          />
        }
        <br />
        <h3>Related Search</h3>
        <ListView
          list={queriedData}
        />
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
          formula
          otid
          important
        }
      }
    }
  }
`;