import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "../Grid/GridItem.jsx";
import teamStyle from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import API from "../../utils/API";
import { throws } from "assert";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
  }

  saveBook = event => {
    event.preventDefault();
    this.setState({ saved: true });
    API.saveBook({
      title: this.props.title,
      authors: this.props.authors,
      description: this.props.description,
      link: this.props.link,
      image: this.props.image,
      google_id: this.props.google_id
    })
      .then()
      .catch(err => console.log(err));
  };
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.props.onChange())
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
    return (
      <GridItem xs={12} sm={12} md={12} className="divider">
        <GridItem xs={2} sm={2} md={2} className="float">
          <img
            src={this.props.image}
            alt="book_image"
            className={imageClasses}
          />
        </GridItem>
        <GridItem xs={10} sm={10} md={10} align="left">
          <h4 className={classes.cardTitle}>
            Title: {this.props.title}
            <br />
            <small className={classes.smallTitle}>
              Authors:{" "}
              {Array.isArray(this.props.authors)
                ? this.props.authors.map(author => author)
                : this.props.authors}
            </small>
          </h4>
          <div className="wrapper-book">
            <p className={classes.description}>{this.props.description}</p>
            <a href={this.props.link} target="_blank">
              Link to preview
            </a>
            {this.props.page === "delete" ? (
              <button
                className="delete"
                onClick={() => this.deleteBook(this.props.id)}
              >
                Delete
              </button>
            ) : this.state.saved || this.props.dbsaved ? (
              <span className="saved">Saved</span>
            ) : (
              <button className="save" onClick={this.saveBook}>
                Save
              </button>
            )}
          </div>
        </GridItem>
      </GridItem>
    );
  }
}
export default withStyles(teamStyle)(Book);
