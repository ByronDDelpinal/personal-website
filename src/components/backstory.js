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
        actually called. That's changed quite a bit these days, but more on that
        later.
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
        A lot of people look back at their high school experience as a time when
        the world seemed so much easier. A simpler time, with very little
        responsibility. High School Byron didn’t really worry about taxes or
        politics. He didn’t concern himself with what was happening in other
        parts of the world or whatever the deal was with Julius Caesar (He died?
        Or something?). Those things were Future Byron’s problems.
      </p>
      <p>
        One portion of his education that High School Byron should have paid
        more attention to, however, was sex education. You can imagine the
        difficulty this care-free, sweet, summer child had in explaining to his
        aunt and uncle during his sophomore year that his girlfriend at was
        pregnant. My aunt and uncle took me in when I was 14 and their reward a
        year and a half later was having to make room for an infant in the
        house. They’re saints and I never thanked them enough at the time. I
        can’t imagine the stress this put on them.
      </p>
      <p>
        I don’t know the stats on high school sweetheart relationships lasting,
        but I’m guessing the numbers are even lower between couples who dated on
        and off throughout high school and had a baby together. Either way,
        Aiden’s mom and I didn’t last very long.
      </p>
      <p>
        Fast-forward to 2012. 22-year-old Byron was now working part-time at the
        computer lab in the engineering department at the University of Akron
        and trying to finish a degree in computer engineering (Spoiler alert: He
        didn’t. No regrets). I was a single dad in college who came from a poor
        family and had to take out extra student loans to pay the bills since we
        couldn't exactly live in the dorms with everyone else. I ended up
        dropping out and working in retail for a few years, living paycheck to
        paycheck. Working full-time and raising the baby was difficult enough.
        Throwing school on top of that was just impossible. It was a really
        depressing time watching all of my friends live their "college years"
        while I had to worry about trying to get overtime hours to feed a kid.
      </p>
      <p>
        Enter, Kirsten. I met my wife a year or two prior to us dating when we
        both worked at Staples. We weren’t very fond of each other initially. I
        took my job very seriously, trying to get promoted with thoughts of
        quitting college to get into middle-management at the retailer, and she
        was Marshawn Lynch at a press conference every day, killing time and
        saving money for her future career as a designer. Our goals didn’t
        align. We didn’t start dating until after we reconnected on Facebook and
        actually took the time to get to know each other. She knew I had a kid,
        but it wasn’t something we discussed regularly. It took a while before I
        introduced the two. We took that very slow, and I remained protective of
        the relationship I had with Aiden. I had only introduced him to the two
        people with which I had serious relationships.
      </p>
      <p>
        Kirsten and I moved in together in 2013 and made the transition to
        officially becoming a “blended” household, although I don’t think we
        ever used that term to describe it. We lived in Highland Square. Around
        the same time, Aiden’s mom had come back into his life in a more serious
        capacity. It was a big change for a lot of reasons.
      </p>
      <p>
        We've had a long journey since then, but it's been mostly uphill. I got
        my first real software development job in 2012 and Kirsten started
        working at Goodyear right after college in 2013.
      </p>
      <p>
        We finally bought our first home in Green, OH in the fall of 2017 and
        welcomed our first girl, Evelyn into the world in February of 2018. Even
        more recently, we welcomed our second girl, Lillian, into this slightly
        crazier world shortly after Christmas in 2020. Having a baby in 2020
        felt like the equivelant of eloping. Hardly anyone even saw Kirsten
        while she was pregnant.
      </p>
      <p>
        Life was hard for a while, but I live the life I always wanted to now
        and I couldn't be happier. I'm doing my best to provide the childhood I
        never had to my kids.
      </p>
    </section>
  );
};

export default Backstory;
