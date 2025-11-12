import { Award, Palette, Heart, Users } from "lucide-react";
import styles from "./About.module.scss";

export function About() {
  const highlights = [
    {
      icon: Palette,
      title: "Unique Style",
      description: "A distinctive blend of contemporary and abstract expressionism that captivates viewers."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized internationally with multiple awards and exhibitions across Europe and America."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Every brushstroke is infused with emotion, creating pieces that resonate deeply with collectors."
    },
    {
      icon: Users,
      title: "Collector Favorite",
      description: "Trusted by art collectors worldwide for authentic, museum-quality original paintings."
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About the Artist</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h3 className={styles.subtitle}>Emily Williams</h3>
            
            <p className={styles.text}>
            Growing up Emily loved to paint and draw and enjoyed practicing the piano. 
            You could often find Emily in her room following a step by step drawing 
            book or creating silly videos with her siblings. 
            </p>
            
            <p className={styles.text}>
              Emily graduated from the University of IUPUI with a Bachelors 
              degree in Project Management and a minor in Interior Design. She has 
              completed over 200 watercolor painings over the last 10 years and has 
              satisfied customers in almost 20 differnt states.
            </p>
            
            <p className={styles.text}>
              Currently Emily is employed as an interior designer and project manager at a
              Kitchen redesign company. In her free time she enjoys spending time with her
              husband and dog.
            </p>
            
            <div className={styles.quote}>
              <blockquote>
                "Wave your fwag wittle fwag man! Wave it pwoudwy!"
              </blockquote>
              <div className={styles.author}>— Emily Williams</div>
            </div>
          </div>
          
          <div className={styles.highlights}>
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className={styles.highlight}>
                  <IconComponent className={styles.icon} />
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={styles.infoBox}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h4>Education</h4>
              <p>Royal Academy of Fine Arts, Barcelona</p>
              <p>MFA in Contemporary Art</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Exhibitions</h4>
              <p>50+ Solo Exhibitions</p>
              <p>100+ Group Exhibitions</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Collections</h4>
              <p>Featured in 30+ Museums</p>
              <p>Private Collections Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
