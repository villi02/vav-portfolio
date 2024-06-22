import CardType from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import React from "react";

interface ClassCardProps {
  title: string;
  code: string;
  prom: string;
  weburl: string;
  ghLink?: string;
  hasCode?: boolean;
}

const ClassCard: React.FC<ClassCardProps> = (props) => {
  return (
    <CardType className="project-card-view">
      <CardType.Body>
        <CardType.Title>{props.title}</CardType.Title>
      </CardType.Body>
      <ListGroup>
        <ListGroup.Item className="class-code-view">{props.code}</ListGroup.Item>
        <ListGroup.Item className="class-code-view">
          <span></span>{props.prom}
        </ListGroup.Item>
      </ListGroup>
      <CardType.Body>
        <CardType.Link style={{ bottom: "10px", position: "absolute", marginTop: "20px" }} href={props.weburl}>
          Course website
        </CardType.Link>
        {!props.hasCode && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ position: "absolute", bottom: "3%", right: "3%" }}>
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
      </CardType.Body>
    </CardType>
  );
}

export default ClassCard;