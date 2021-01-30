import React from "react"
import Section from "./Section"

export default () => {
  return (
    <Section>
      {/* <h2>What</h2> */}
      <p>
        “Klang-/Licht STROM” is a collaborative performance project of{" "}
        <a href="http://www.benbengler.com/" target="_blank" rel="noreferrer">
          Ben Bengler
        </a>{" "}
        (music, live electronics) and Thomas Geissl (light, programming). It's
        driven by Bengler/Geissl's shared vision for creating performances where the audience
        is at the centre of things, with sound and light unfolding around them.
      </p>
      <p>
        Largely free from strictly timed sequencing, Bengler creates and evolves the
        music via real-time audio manipulation and sound processing
        techniques. The music is analysed in real-time, and Geissl uses the
        derived data as a raw material, augmenting and manipulating it with a
        custom software tool to creatively control the the spatial light setup.
      </p>

      <p>
        In this way, Bengler/Geissl conjure up an interconnected and fluid
        choreography of sound and light unfolding around the audience.
      </p>
    </Section>
  )
}
