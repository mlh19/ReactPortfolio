import React, { useState } from 'react';


export default function Contact() {
  return (
    <div className="m-4">
      <h1 className="d-flex justify-content-center">Contact</h1>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <form className="col-6">
            <div className="mb-3">
              <label for="FormControlInput" className="form-label">Your E-mail Address</label>
              <input type="email" className="form-control" id="FormControlInput" placeholder="name@example.com" required="required" data-error="Valid email is required."/>
            </div>
            <div className="mb-3">
              <label for="FormControlTextarea" className="form-label">Message</label>
              <textarea className="form-control" id="FormControlTextarea" rows="3" required="required" data-error="Please fill out message field"></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}