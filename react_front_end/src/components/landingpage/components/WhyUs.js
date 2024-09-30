import React from 'react';

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="section why-us">
            <div className="container-fluid"> {/* استخدم container-fluid لملء العرض */}
                <div className="row gy-4">
                    <div className="col-12" data-aos="fade-up" data-aos-delay="100"> {/* اجعل العمود يملأ العرض بالكامل */}
                        <div className="why-box">
                            <h3>Why Choose Our Art School?</h3>
                            <p>
                                We offer an innovative learning environment that combines creativity with education. Our instructors are professional and experienced, dedicated to developing students' skills in various art forms.
                            </p>
                          
                        </div>
                    </div>
                    {/* You can add more columns here if needed */}
                </div>
            </div>
        </section>
    );
}
