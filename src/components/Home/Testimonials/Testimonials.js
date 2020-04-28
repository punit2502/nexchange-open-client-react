import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styles from './Testimonials.scss';
import data from './data.json';
import { I18n } from 'react-i18next';
require('react-id-swiper/src/styles/css/swiper.css');

class Testimonials extends Component {
  swiper = null;

  goNext = () => {
    if (this.swiper) this.swiper.slideNext();
  };

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev();
  };

  render() {
    return (
      <I18n ns="translations">
        {t => (
          <div className={styles.container}>
            <div className={styles.header}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>{t('testimonials.title')}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className={styles.swiper}>
                    <div>
                      <Swiper
                        ref={node => {
                          if (node && node.swiper) {
                            this.swiper = node.swiper;
                          }
                        }}
                        loop={true}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                      >
                        {data.map((testimonial, index) => (
                          <div className={styles.link} key={testimonial.name + index}>
                            <div className={styles.slide}>
                              <div className={styles.text}>{testimonial.text}</div>
                              <div className={styles.info}>
                                <div className={styles.date}>{testimonial.date}</div>
                                <div className={styles.profile}>
                                  <img src={`../../../img/${testimonial.image}`} alt={testimonial.name} />
                                  <h3>{testimonial.name}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Swiper>
                    </div>

                    <div className={`${styles.prev} ${styles.arrow}`} onClick={this.goPrev} data-test="prev" />
                    <div className={`${styles.next} ${styles.arrow}`} onClick={this.goNext} data-test="next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </I18n>
    );
  }
}

export default Testimonials;
