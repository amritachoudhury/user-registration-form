import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "../skeleton-load/Skeleton";
import { USER_CARD } from "../utils/constants";
import useUserData from "../utils/useUserData";

export default function UserDetail() {
  const navigateBackTo = useNavigate();

  const [expandItemWtithIndex, setExpandItemWithIndex] = useState(null);

  const params = useParams();

  const userData = useUserData(params.id);

  return !userData ? (
    <Skeleton />
  ) : (
    <>
      <div className="user-detail-header">
        <h1>
          {userData.fName} {userData.lName}
        </h1>
        <h4>{userData.email}</h4>
      </div>
      <div className="detail-sections">
        <div className="section-banner">Departmental details</div>
        <div className="sections">
          <span className="sections-name">Name: </span>
          <span className="sections-value">{userData.company.name}</span>
        </div>
        <div className="sections">
          <span className="sections-name">Department: </span>
          <span className="sections-value">{userData.company.department}</span>
        </div>
      </div>

      <div className="skill-sections">
        <span className="section-banner">Skills</span>
        {userData.skills.map((skill, index) => {
          return (
            <Accordion
              key={skill.type}
              expanded={index === expandItemWtithIndex ? true : false}
              onChange={(_event, isExpanded) =>
                setExpandItemWithIndex(isExpanded ? index : false)
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>
                  <span className="skill-type">
                    {skill.type} Skills details ({skill.skills.length})
                  </span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {skill.skills.map((skillDet) => {
                  return (
                    <li className="skill-list" key={skillDet}>
                      {skillDet}
                    </li>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <footer>
        <section className="btn-container">
          <Button onClick={() => navigateBackTo("/" + USER_CARD)}>
            back to cards
          </Button>
        </section>
      </footer>
    </>
  );
}
