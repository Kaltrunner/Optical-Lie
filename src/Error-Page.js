import { ScrollToTop } from "react-router-scroll-to-top";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="main-error-page-div">
      <div>
        <Link id="hidden-error-link" to="/">
          <h1 className="error-page-text">Error:</h1>
        </Link>
        <h4 className="error-h4">
          You have reached this page my mistake!
          <br />
          Please press and hold the Control + Alt + Delete (for Windows users)
          or Command + Option + Esc (for Mac users) to reset the page.
          <br />
          Thanks!
        </h4>
      </div>

      <div>
        <ul>
          <br />
          <li>
            400 Bad Request The server cannot or will not process the request
            due to an apparent client error (e.g., malformed request syntax,
            size too large, invalid request message framing, or deceptive
            request routing).
          </li>
          <br />
          <li>
            401 Unauthorized Similar to 403 Forbidden, but specifically for use
            when authentication is required and has failed or has not yet been
            provided. The response must include a WWW-Authenticate header field
            containing a challenge applicable to the requested resource. See
            Basic access authentication and Digest access authentication. 401
            semantically means "unauthorised", the user does not have valid
            authentication credentials for the target resource.
          </li>
          <br />
          <br />
          <li>
            402 Payment Required Reserved for future use. The original intention
            was that this code might be used as part of some form of digital
            cash or micropayment scheme, as proposed, for example, by GNU Taler,
            but that has not yet happened, and this code is not widely used.
            Google Developers API uses this status if a particular developer has
            exceeded the daily limit on requests. Sipgate uses this code if an
            account does not have sufficient funds to start a call. Shopify uses
            this code when the store has not paid their fees and is temporarily
            disabled. Stripe uses this code for failed payments where parameters
            were correct, for example blocked fraudulent payments.
          </li>
          <br />
          <br />
          <li>
            403 Forbidden The request contained valid data and was understood by
            the server, but the server is refusing action. This may be due to
            the user not having the necessary permissions for a resource or
            needing an account of some sort, or attempting a prohibited action
            (e.g. creating a duplicate record where only one is allowed). This
            code is also typically used if the request provided authentication
            by answering the WWW-Authenticate header field challenge, but the
            server did not accept that authentication. The request should not be
            repeated.
          </li>
          <br />
          <br />
          <li>
            404 Not Found The requested resource could not be found but may be
            available in the future. Subsequent requests by the client are
            permissible.
          </li>
          <br />
          <br />
          <li>
            405 Method Not Allowed A request method is not supported for the
            requested resource; for example, a GET request on a form that
            requires data to be presented via POST, or a PUT request on a
            read-only resource.
          </li>
          <br />
          <br />
          <li>
            406 Not Acceptable The requested resource is capable of generating
            only content not acceptable according to the Accept headers sent in
            the request. See Content negotiation.
          </li>
          <br />
          <br />
          <li>
            407 Proxy Authentication Required The client must first authenticate
            itself with the proxy.
          </li>
          <br />
          <br />
          <li>
            408 Request Timeout The server timed out waiting for the request.
            According to HTTP specifications: "The client did not produce a
            request within the time that the server was prepared to wait. The
            client MAY repeat the request without modifications at any later
            time."
          </li>
          <br />
          <br />
          <li>
            409 Conflict Indicates that the request could not be processed
            because of conflict in the current state of the resource, such as an
            edit conflict between multiple simultaneous updates.
          </li>
          <br />
          <br />
          <li>
            410 Gone Indicates that the resource requested was previously in use
            but is no longer available and will not be available again. This
            should be used when a resource has been intentionally removed and
            the resource should be purged. Upon receiving a 410 status code, the
            client should not request the resource in the future. Clients such
            as search engines should remove the resource from their indices.
            Most use cases do not require clients and search engines to purge
            the resource, and a "404 Not Found" may be used instead.
          </li>
          <br />
          <br />
          <li>
            411 Length Required The request did not specify the length of its
            content, which is required by the requested resource.
          </li>
          <br />
          <br />
          <li>
            412 Precondition Failed The server does not meet one of the
            preconditions that the requester put on the request header fields.
          </li>
          <br />
          <br />
          <li>
            413 Payload Too Large The request is larger than the server is
            willing or able to process. Previously called "Request Entity Too
            Large" in RFC 2616.
          </li>
          <br />
          <br />
          <li>
            414 URI Too Long The URI provided was too long for the server to
            process. Often the result of too much data being encoded as a
            query-string of a GET request, in which case it should be converted
            to a POST request. Called "Request-URI Too Long" previously in RFC
            2616.
          </li>
          <br />
          <br />
          <li>
            415 Unsupported Media Type The request entity has a media type which
            the server or resource does not support. For example, the client
            uploads an image as image/svg+xml, but the server requires that
            images use a different format.
          </li>
          <br />
          <br />
          <li>
            416 Range Not Satisfiable The client has asked for a portion of the
            file (byte serving), but the server cannot supply that portion. For
            example, if the client asked for a part of the file that lies beyond
            the end of the file. Called "Requested Range Not Satisfiable"
            previously RFC 2616.
          </li>
          <br />
          <br />
          <li>
            417 Expectation Failed The server cannot meet the requirements of
            the Expect request-header field.
          </li>
          <br />
          <br />
          <li>
            418 I'm a teapot This code was defined in 1998 as one of the
            traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee
            Pot Control Protocol, and is not expected to be implemented by
            actual HTTP servers. The RFC specifies this code should be returned
            by teapots requested to brew coffee. This HTTP status is used as an
            Easter egg in some websites, such as Google.com's "I'm a teapot"
            easter egg. Sometimes, this status code is also used as a response
            to a blocked request, instead of the more appropriate 403 Forbidden.
          </li>
          <br />
          <br />
          <li>
            421 Misdirected Request The request was directed at a server that is
            not able to produce a response.
          </li>
          <br />
          <br />
          <li>
            422 Unprocessable Entity The request was well-formed but was unable
            to be followed due to semantic errors.
          </li>
          <br />
          <br />
          <li>423 Locked The resource that is being accessed is locked.</li>
          <br />
          <br />
          <Link id="hidden-error-link" to="/MainPage">
            <li className="hidden-error-link">
              424 Failed Dependency The request failed because it depended on
              another request and that request failed.
            </li>
          </Link>
          <br />
          <br />
          <li>
            425 Too Early Indicates that the server is unwilling to risk
            processing a request that might be replayed.
          </li>
          <br />
          <br />
          <li>
            426 Upgrade Required The client should switch to a different
            protocol such as TLS/1.3, given in the Upgrade header field.
          </li>
          <br />
          <br />
          <li>
            428 Precondition Required The origin server requires the request to
            be conditional. Intended to prevent the 'lost update' problem, where
            a client GETs a resource's state, modifies it, and PUTs it back to
            the server, when meanwhile a third party has modified the state on
            the server, leading to a conflict.
          </li>
          <br />
          <br />
          <li>
            429 Too Many Requests The user has sent too many requests in a given
            amount of time. Intended for use with rate-limiting schemes.
          </li>
          <br />
          <br />
          <li>
            431 Request Header Fields Too Large The server is unwilling to
            process the request because either an individual header field, or
            all the header fields collectively, are too large.
          </li>
          <br />
          <br />
          <li>
            451 Unavailable For Legal Reasons A server operator has received a
            legal demand to deny access to a resource or to a set of resources
            that includes the requested resource. The code 451 was chosen as a
            reference to the novel Fahrenheit 451 (see the Acknowledgements in
            the RFC).
          </li>
          <br />
        </ul>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default ErrorPage;
