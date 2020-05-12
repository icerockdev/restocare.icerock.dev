/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <link rel="manifest" href="site.webmanifest" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {props.headComponents}

        <style>
          {`@keyframes spin {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }

            .preloader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              width: 100vw;
              height: 100%;
              height: 100vh;
              z-index: 5;
              display: flex;
              align-items: center;
              justify-content: center;
              background: white;
              opacity: 1;
              transition: opacity 0.5s;
            }

            .preloader__spinner {
              animation: spin 1s infinite linear;
              height: 48px;
              width: 48px;
            }`}
        </style>
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}

        <div className="preloader" id="preloader">
          <div className="preloader__spinner">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <path fill="#d40000" fillOpacity="0" d="M.001 0h48v48h-48z" />
              <path
                d="M45.185 24.001a21.186 21.186 0 01-13.078 19.574 21.186 21.186 0 01-23.089-4.593 21.186 21.186 0 01-4.593-23.089A21.186 21.186 0 0124 2.815"
                fill="none"
                stroke="#55439d"
                strokeWidth="5.62772017"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
