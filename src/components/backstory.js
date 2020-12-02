import React, { useState } from 'react';

const Backstory = () => {
  const [levelOfDetail] = useState('low');

  // const changeDetailLevel = detailLevel => {
  //   setlevelOfDetail(detailLevel);
  // };

  const header = () => {
    switch (levelOfDetail) {
      case 'low':
        return 'The Highlights';
      case 'medium':
        return 'The Story';
      case 'high':
        return 'The FULL Story';
      default:
        return 'The Highlights';
    }
  };

  return (
    <section className="backstory">
      {/*
      <div className="backstory--detail-selection">
        <div className="backstory--selection">
          <p>This story only gets longer with time, how much detail do you <em>actually</em> want?</p>
          <select
            className="facet"
            onChange={event => changeDetailLevel(event.target.value)}
          >
            <option value="low">Level Of Detail ▼ </option>
            <option value="low">Just The Highlights</option>
            <option value="medium">Add Some Color</option>
            <option value="high">Let's Hear It All</option>
          </select>
        </div>

        <Link to="/and-owns-a-suit" className="work-button button highlighted">If you're looking for "work Byron" you can find him over here.</Link>
      </div>
      */}
      <h2 className="backstory--header">Life: {header()}</h2>
      <p>
        I was born and raised on the west side of Cleveland. My dad, Byron, was
        a carpenter, and my mom, Richelle, worked doing data entry or something.
        I'm not actually sure, her work wasn't actually clear to me as a child.
        They often worked long hours to make ends meet, which left me at home
        quite a bit. I was always a curious child. When they were gone I’d try
        to take things apart to see how they worked just to put them back
        together again. I was far better at the former than I was at the latter,
        which got me in all sorts of trouble. You try telling your mom that you
        couldn’t figure out how to get the printer back together after she had
        to save up a few months to buy it in the first place. Good luck! I spent
        my summers either in Tennessee with my nana or hanging out at my dad’s
        shop where he’d have to ask me six times for the same tool because I was
        either playing Pokemon on my Gameboy or had no clue what the tools were
        actually called. It wasn’t the world’s best childhood, but it was my own
        and I enjoyed it most of the time.
      </p>
      <p>
        My parents got divorced when I was in middle school. It wasn't pretty.
        Shortly after, I moved to Westlake to live with my Aunt Robin, Uncle
        Tommy, and cousin Taylor. At this point, music was a big part of my
        life. Throughout high school, I tried playing many sports, including
        football and lacrosse, which told me in big bold letters how
        uncoordinated I am. During that entire time, the one thing that stuck
        with me was the band. I played percussion. In the summer, I’d march
        snare or quints in the marching band. In the winter, I’d play percussion
        with the orchestra. In the spring, I’d play auxilliary percussion and
        mallets with the wind symphony.
      </p>
      <p>
        At this point, high school was going great for me. I didn’t have a care
        in the world. That all took a turn when I was 16. Having a kid when
        you're in high school is tough enough to handle, but when his mom left
        us two years later I thought I'd never recover. I was a single dad in
        college who came from a poor family and had to take out extra student
        loans to pay the bills since we couldn't exactly live in the dorms with
        everyone else. I ended up dropping out and working in retail for a year,
        living paycheck to paycheck because working full-time and raising the
        baby was difficult enough. Throwing school on top of that was just
        impossible. It was a really depressing time watching all of my friends
        live their "college years" while I had to worry about trying to get
        overtime hours to feed a kid. Long story short, I eventually got the
        motivation to go back to school, with some help from my family to watch
        Aiden while I went to class. I networked as much as I could, and while I
        was staying in the electronics lab until 2:00 AM and not seeing Aiden
        very much, I knew it would be worth it in the end.
      </p>
      <p>
        Turns out, I met my amazing future wife, Kirsten, during that year I
        dropped out and worked retail full-time. We both worked at Staples. At
        school, all that networking and extra effort turned into my first
        full-time job offer in the tech industry at an embedded systems company,
        which I've been fortunate enough to turn into a great career.
      </p>
      <p>
        Currently, I work as a consultant at Sparkbox focusing on web
        development. They’re a Dayton-based firm that allows me to work from
        home and encourages me to be involved in my community. While working as
        a consultant, I've gotten the chance to do things like:
        <ul>
          <li>Build multiple applications for startups from scratch</li>
          <li>Establish myself as a tech lead at a fortune 100 retailer</li>
          <li>
            Travel and speak at numerous technical conferences around the
            country
          </li>
        </ul>
        Life was hard for a while, but I live the life I always wanted to now
        and I couldn't be happier. I'm doing my best to provide the childhood I
        never had to my now two kids, Aiden and Evelyn, and giving back to the
        community that made it all possible however I can.
      </p>
    </section>
  );
};

export default Backstory;
