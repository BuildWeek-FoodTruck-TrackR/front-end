/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Header({ title, activePage, link }) {
  return <>
    <div className="row align-items-center m-5">
      <div className="col-7">
        <h4 className="font-weight-bold">{title}</h4>
      </div>
      {link &&
        <div className="col-5 text-right">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a 
            href={link.href} 
            className="btn btn-primary btn-custom" 
            onClick={e => {
              e.preventDefault();
              activePage({ name: link.text, activeTruck: link.truckId })
            }}
          >
            {link.text}
          </a>
        </div>
      }
    </div>
  </>
}