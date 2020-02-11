import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Husky from "./../images/single-husky.png"
import Rotweiler from "./../images/rotweiler.png"
import Husky2 from "./../images/husky2.png"
import Husky2a from "./../images/husky2a.png"
import FloppyDog from "./../images/floppy_dog.png"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "none header header none"
    "none welcome welcome none"
    "prj prj prj prj"
    "none skills skills none"
    "none foot foot none";
`
const Nav = styled.div`
  margin: 0 20px;
  grid-area: header;
`
const NavH1 = styled.h1`
  padding-bottom: 10px;
  border-bottom: 3px solid var(--primary);
  display: inline-block;
`
const Welcome = styled.div`
  grid-area: welcome;
`
const WelcomeText = styled.div``
const WelcomeImage = styled.div`
  grid-area: image;
`
const ProjectImg = styled.img``
const PortfolioSection = styled.div`
  grid-area: prj;
`

const ProjectsGrid = styled.ul`
  display: flex;
  flex-direction: row
  justify-content: flex-start
  gap: 10px;
`
const ProjectItem = styled.li`
  padding: 20px;
  background: #9893d8;
`
const ProjectName = styled.h3`
  color: #dddbff;
`
const Leading = styled.p`
  font-size: 1.1em;
`

const SkillsSection = styled.div`
  grid-area: skills;
`
const SkillsGrid = styled.ul``
const SkillsItem = styled.li``
const SkillsImage = styled.img``
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
const SkillsImageTitle = styled.h4``
const StyledFooter = styled.footer`
  grid-area: foot;
`
const ContactSection = styled.div``
const FooterGrid = styled.div`
  display: grid;
`
const Copyright = styled.p``
const Social = styled.ul``
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <GridContainer>
    <Nav>
      <NavH1>Developer</NavH1>
      <ul>
        <ListLink to="/#portfolio">Portfolio</ListLink>
        <ListLink to="/#skills">Skills</ListLink>
        <ListLink to="/#contact">Contact</ListLink>
      </ul>
    </Nav>
    <Welcome>
      <WelcomeText>
        <h2>
          Dog Lover
          <br /> and JS Developer
        </h2>

        <Leading>
          Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore
        </Leading>

        <Button href="/#portfolio">view my work</Button>
      </WelcomeText>
    </Welcome>
    <WelcomeImage>
    <img
        style={{ marginLeft: "50%", width: "300px", height: "700px" }}
        alt="husky"
        src={Husky}
      ></img> 
    </WelcomeImage>

    <PortfolioSection id="portfolio">
      <h3>Some of my projects</h3>
      <ProjectsGrid>
        <ProjectItem>
          <ProjectImg
            style={{ width: "70%", height: "70%" }}
            src={Rotweiler}
            alt="rotweiler"
          ></ProjectImg>
          <ProjectName>Project Name 1</ProjectName>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg
            style={{ width: "70%", height: "70%" }}
            src={Husky2a}
            alt="husky"
          ></ProjectImg>
          <ProjectName>Project Name 2</ProjectName>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg
            style={{ width: "70%", height: "70%" }}
            src={FloppyDog}
            alt="poodle"
          ></ProjectImg>
          <ProjectName>Project Name 3</ProjectName>
        </ProjectItem>
      </ProjectsGrid>
    </PortfolioSection>
    <SkillsSection id="Skills">
      <h3>Useful Things I Can Do</h3>
      <SkillsGrid>
        <SkillsItem>
          <SkillsImage src="" alt="project 1"></SkillsImage>
          <SkillsImageTitle>img</SkillsImageTitle>
        </SkillsItem>
        <SkillsItem>
          <SkillsImage src="" alt="project 1"></SkillsImage>
          <SkillsImageTitle>img</SkillsImageTitle>
        </SkillsItem>
        <SkillsItem>
          <SkillsImage src="" alt="project 1"></SkillsImage>
          <SkillsImageTitle>img</SkillsImageTitle>
        </SkillsItem>
        <SkillsItem>
          <SkillsImage src="" alt="project 1"></SkillsImage>
          <SkillsImageTitle>SkillsImage</SkillsImageTitle>
        </SkillsItem>
      </SkillsGrid>
    </SkillsSection>
    <ContactSection id="contact">
      <h3>Get in touch</h3>
      <Leading>
        Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore
      </Leading>
      <form>
        <input type="text"></input>
        <input type="email"></input>
        <textarea></textarea>
        <Button>Send</Button>
      </form>
    </ContactSection>
    <StyledFooter>
      <FooterGrid>
        <Copyright>Copyright 2020</Copyright>
        <Social>
          <li>
            <img></img>
          </li>
          <li>
            <img></img>
          </li>
          <li>
            <img></img>
          </li>
        </Social>
      </FooterGrid>
    </StyledFooter>
  </GridContainer>
)
