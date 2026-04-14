import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <div id="fh5co-consult">
      <div className="video fh5co-video" style={{backgroundImage: 'url(images/nithin.jpeg)'}}>
        <div className="overlay"></div>
      </div>
      <div className="choose animate-box">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="row form-group">
            <div className="col-md-6">
              <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <input type="text" id="email" className="form-control" placeholder="Your email address" />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Send Message" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
