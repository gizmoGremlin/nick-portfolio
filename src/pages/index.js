import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAndroid } from "react-icons/fa"
import { FaAppStore } from "react-icons/fa"
import Rotweiler from "./../images/rotweiler.png"

import SingleHuskySm from "./../images/SingleHuskySm.png"
import GitIcon from "./../images/git_icon.png"

import DogBone from "./../images/DogBoneFinalPurple.png"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "header header img img"
    ". . img img"
    "prj prj prj prj"
    "skills skills skills skills"
    "contact contact contact contact";

  @media screen and (min-width: 1200px) {
    grid-template-areas:
      ". header header img"
      "prj prj prj prj"
      "skills skills skills skills"
      "contact contact contact contact";
  }
`
const SkillsContainer = styled.div`
  grid-area: skills;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8vh;
  margin-top: 8vh;
`
const SkillsAndImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const SkillsNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SkillsItem = styled.li``
const SkillsImage = styled.img``

const NavContainer = styled.div`
  grid-area: header;
  background: none;
  display: flex;
  flex-direction: column;
  margin-top: 60%;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 1200px) {
    margin-top: 10%;
  }
`
const NavH1 = styled.h1`
  padding-bottom: 10px;
  border-bottom: 3px solid var(--primary);
`
const NavListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const WelcomeContainer = styled.div`
  grid-area: welcome;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15%;
`

const ImageContainer = styled.div`
  grid-area: img;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: none;
`
const Button = styled.a`
  background: none;
  border: 2px solid var(--tertiary);
  color: var(--tertiary);
  padding: 6px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  display: inline-block;
  &:hover {
    color: black;
    background: var(--tertiary);
  }
`
const Leading = styled.p`
  font-size: 1.1em;
  margin-left: 5%;
  margin-bottom: 5%;
`
const ProjectContainer = styled.div`
  grid-area: prj;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--secondary);
`
const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
`
const ProjectUl = styled.ul`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;
`
const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 10px;
  background: #9893d8;
` // background: #9893d8;
const ProjectName = styled.a`
  color: #dddbff;
  margin-left: 25px;
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  //background: #080936;
`

const FooterContainer = styled.div``
const ListLink = props => (
  <li style={{ marginRight: "2.5%", marginLeft: "2.5%" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const handleExtrenalNav = site => {
  console.log(site)
  console.log("here!!!!")
  window.location.href = site
}
export default () => (
  <GridContainer>
    <NavContainer>
      <NavH1>Portfolio</NavH1>
      <NavListContainer id="top">
        <ListLink to="/#portfolio">Projects</ListLink>
        <ListLink to="/#skills">Skills</ListLink>
        <ListLink to="/#contact">Contact</ListLink>
      </NavListContainer>
      <WelcomeContainer>
        <h2>
          Dog Lover
          <br /> and <br /> Developer
        </h2>
        <Leading>
          Hi, I'm Nick. I'm a full-stack web and mobile developer. I specialize
          in building web apps, cross-platform mobile Apps and native Android
          Apps
        </Leading>

        <Button href="/#portfolio">view my work</Button>
      </WelcomeContainer>
    </NavContainer>

    <ImageContainer>
      <img
        style={{ position: "absolute", marginLeft: "10px", marginTop: "40px" }}
        alt="husky"
        src={SingleHuskySm}
      ></img>
    </ImageContainer>
    <ProjectContainer id="portfolio">
      <h2>Try a Demo app</h2>
      <ProjectsGrid>
        <ProjectUl>
          <ProjectItem>
            <img
              style={{ width: "70%", height: "70%" }}
              src={Rotweiler}
              alt="rotweiler"
            ></img>

            <ProjectName
              style={{ marginTop: "1.5vh" }}
              href="https://play.google.com/store/apps/details?id=com.nickgill.thewellapp"
            >
              The Well App
            </ProjectName>
            <div style={{ marginTop: "1.5vh" }}>
              <FaAndroid
                color="var(--tertiary)"
                size="1.5em"
                className="fa-flag"
                style={{ marginRight: "1.5vh" }}
                onClick={() =>
                  handleExtrenalNav(
                    "https://play.google.com/store/apps/details?id=com.nickgill.thewellapp"
                  )
                }
              />
              <FaAppStore
                color="var(--tertiary)"
                size="1.5em"
                className="fa-flag"
                onClick={() =>
                  handleExtrenalNav(
                    "https://play.google.com/store/apps/details?id=com.nickgill.thewellapp"
                  )
                }
              />
            </div>
          </ProjectItem>
        </ProjectUl>
      </ProjectsGrid>
      <RepoContainer>
        <h2>Check out my repositories on Github</h2>
        <ProjectName href="https://github.com/gizmoGremlin">
          Source Code Repositories
        </ProjectName>
        <img
          src={GitIcon}
          style={{ width: 24, height: 24, marginLeft: ".1%" }}
          alt="dog"
        />
      </RepoContainer>
    </ProjectContainer>
    <SkillsContainer id="skills">
      <h2>Useful things I can do...</h2>
      <SkillsAndImageContainer>
        <SkillsNamesContainer>
          <h3>React Native</h3>
          <h3>React</h3>
          <h3>Android</h3>
          <h3>JavaScript</h3>
          <h3>Gatsby</h3>
          <h3>Java/Kotlin</h3>
        </SkillsNamesContainer>
        <SkillsItem>
          <SkillsImage src={DogBone} alt="bone"></SkillsImage>
        </SkillsItem>
      </SkillsAndImageContainer>
    </SkillsContainer>
    <ContactContainerHolder>
      <ContactContainer id="contact">
        <h3>Get In Touch</h3>
        <p style={{ marginBottom: "3%" }} class="leading">
          I Look forward to hearing from you!.
        </p>
        <StyledForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <StyledInput type="text" placeholder="NAME" />
          <StyledInput type="email" placeholder="EMAIL" />
          <StyledTextArea textarea placeholder="YOUR MESSAGE"></StyledTextArea>
          <SubmitContainer>
            <StyledSubmit value="send" type="submit" />
            <StyledSubmit value="reset" type="reset" />
          </SubmitContainer>
          <BackToTopContainer style={{ padding: "7vh" }}>
            <ListLink to="/#top">Back to Top</ListLink>
          </BackToTopContainer>
        </StyledForm>
      </ContactContainer>
    </ContactContainerHolder>
  </GridContainer>
)
const BackToTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const SubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const StyledSubmit = styled.input`
  background: none;
  border: 2px solid var(--tertiary);
  color: var(--tertiary);
  padding: 6px 12px;
  margin: 1%;
  border-radius: 20px;
  text-transform: uppercase;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  display: inline-block;
  &:hover {
    color: black;
    background: var(--tertiary);
  }
`
const ContactContainerHolder = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
`
const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`

const StyledForm = styled.form``

const StyledInput = styled.input`
  width: 90%;
  margin: 10px 0;
`
const StyledTextArea = styled.textarea`
  width: 90%;
  margin: 10px 0;
  max-width: 100%;
  height: 200px;
`
const TitleAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
