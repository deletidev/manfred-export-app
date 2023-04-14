import { injectGlobal } from '@emotion/css';

injectGlobal`
* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Inter', Roboto, 'Arial', 'Helvetica', sans-serif;
    background-image: url("./assets/background_1.png");

  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

`;
