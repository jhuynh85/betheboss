import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import Internship from '../images/be-the-boss-internship.jpg'

const CodeOfConduct = () => (

  <Container>
    <div className="card p-3">
      <h1>Contributor Covenant Code of Conduct</h1>
      <hr />
      <br />
      <h2>Our Pledge</h2>

      <p>In the interest of fostering an open and welcoming environment, we as
    contributors and maintainers pledge to making participation in our project and
    our community a harassment-free experience for everyone, regardless of age, body
    size, disability, ethnicity, sex characteristics, gender identity and expression,
    level of experience, education, socio-economic status, nationality, personal
  appearance, race, religion, or sexual identity and orientation.</p>

      <h2>Our Standards</h2>

      <div className="row">
        <div className="col-lg-6">
          <p>Examples of behavior that contributes to creating a positive environment
    include:</p>

          <ul>
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
          </ul>

          <p>Examples of unacceptable behavior by participants include:</p>

          <ul>
            <li>The use of sexualized language or imagery and unwelcome sexual attention or
      advances</li>
            <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
            <li>Public or private harassment</li>
            <li>Publishing others' private information, such as a physical or electronic
      address, without explicit permission</li>
            <li>Other conduct which could reasonably be considered inappropriate in a
      professional setting</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="ml-2">
            <img src={Internship} alt='internship' width="80%" height="80%" />
          </div>
        </div>
      </div>

      <h2>Our Responsibilities</h2>

      <p>Project maintainers are responsible for clarifying the standards of acceptable
      behavior and are expected to take appropriate and fair corrective action in
    response to any instances of unacceptable behavior.</p>

      <p>Project maintainers have the right and responsibility to remove, edit, or
      reject comments, commits, code, wiki edits, issues, and other contributions
      that are not aligned to this Code of Conduct, or to ban temporarily or
      permanently any contributor for other behaviors that they deem inappropriate,
    threatening, offensive, or harmful.</p>

      <h2>Scope</h2>

      <p>This Code of Conduct applies both within project spaces and in public spaces
      when an individual is representing the project or its community. Examples of
      representing a project or community include using an official project e-mail
      address, posting via an official social media account, or acting as an appointed
      representative at an online or offline event. Representation of a project may be
    further defined and clarified by project maintainers.</p>

      <h2>Enforcement</h2>

      <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be
      reported by contacting the project team at sdtechhubevents@gmail.com. All
      complaints will be reviewed and investigated and will result in a response that
      is deemed necessary and appropriate to the circumstances. The project team is
      obligated to maintain confidentiality with regard to the reporter of an incident.
    Further details of specific enforcement policies may be posted separately.</p>

      <p>Project maintainers who do not follow or enforce the Code of Conduct in good
      faith may face temporary or permanent repercussions as determined by other
    members of the project's leadership.</p>

      <h2>Attribution</h2>

      <p>This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
    available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</p>

      <p>[homepage]: https://www.contributor-covenant.org</p>

      <p>For answers to common questions about this code of conduct, see
    https://www.contributor-covenant.org/faq</p>
    </div>
  </Container>
)

const Container = styled.main`
  padding: 2rem;

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  li {
    line-height: 1;
  }
`

export default CodeOfConduct
