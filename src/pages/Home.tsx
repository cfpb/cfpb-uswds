import {
  Address,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  CardMedia,
  FooterNav,
  Grid,
  GridContainer,
  Logo,
  MediaBlockBody,
  SocialLink,
  SocialLinks,
} from '@trussworks/react-uswds';
import Head from 'components/Head';
import type { ReactElement } from 'react';

export default function HomePage(): ReactElement {
  const returnToTop = (
    <GridContainer className='usa-footer__return-to-top'>
      <a href='#'>Return to top</a>
    </GridContainer>
  );

  const socialLinkItems = [
    <SocialLink key='facebook' name='Facebook' href='#' />,
    <SocialLink key='twitter' name='Twitter' href='#' />,
    <SocialLink key='youtube' name='YouTube' href='#' />,
    <SocialLink key='instagram' name='Instagram' href='#' />,
    <SocialLink key='rss' name='RSS' href='#' />,
  ];

  const footerPrimary = (
    <FooterNav
      aria-label='Footer navigation'
      size='medium'
      links={Array.from({ length: 5 }).fill(
        <a href='javascript:void(0)' className='usa-footer__primary-link'>
          Primary link
        </a>
      )}
    />
  );

  const footerSecondary = (
    <Grid row gap>
      <Logo
        size='medium'
        image={
          <img
            className='usa-footer__logo-img'
            src='https://www.consumerfinance.gov/static/img/logo_237x50@2x.1a8febf782f9.png'
            alt=''
          />
        }
        heading={<p className='usa-footer__logo-heading'>Name of Agency</p>}
      />
      <Grid className='usa-footer__contact-links' mobileLg={{ col: 6 }}>
        <SocialLinks links={socialLinkItems} />
        <h3 className='usa-footer__contact-heading'>Agency Contact Center</h3>
        <Address
          size='medium'
          items={[
            <a key='telephone' href='tel:1-800-555-5555'>
              (800) CALL-GOVT
            </a>,
            <a key='email' href='mailto:info@agency.gov'>
              info@agency.gov
            </a>,
          ]}
        />
      </Grid>
    </Grid>
  );

  return (
    <>
      <Head title='Consumer Financial Protection Bureau' />
      <main id='main-content'>
        <section
          className='usa-hero'
          aria-label='Introduction'
          style={{ backgroundImage: 'url(img/homepage-bg.jpg)' }}
        >
          <GridContainer>
            <div className='usa-hero__callout'>
              <h1 className='usa-hero__heading'>
                <span className='usa-hero__heading--alt'>On your side</span>
                through all of life's important decisions
              </h1>
              <p>
                At the Consumer Financial Protection Bureau, we're dedicated to
                omaking sure you're treated fairly by banks, lenders and other
                financial institutions.
              </p>
            </div>
          </GridContainer>
        </section>

        <section className='usa-graphic-list usa-section'>
          <GridContainer>
            <Grid row gap className='usa-graphic-list__row'>
              <Grid tablet={{ col: true }} className='usa-media-block'>
                <img
                  className='usa-media-block__img'
                  src='https://files.consumerfinance.gov/f/images/cfpb_empowering_consumers.original.png'
                  width='124'
                  height='124'
                  alt='Alt text'
                />
                <MediaBlockBody>
                  <h2 className='usa-graphic-list__heading'>
                    Protect yourself financially from coronavirus
                  </h2>
                  <p>
                    The CFPB is committed to providing consumers with up-to-date
                    information and resources to protect and manage their
                    finances.
                  </p>
                  <Button type='button'>Access our resources</Button>
                </MediaBlockBody>
              </Grid>
              <Grid tablet={{ col: true }} className='usa-media-block'>
                <img
                  className='usa-media-block__img'
                  src='https://files.consumerfinance.gov/f/images/cfpb_learning_through_data_and_research.original.png'
                  width='124'
                  height='124'
                  alt='Alt text'
                />
                <MediaBlockBody>
                  <h2 className='usa-graphic-list__heading'>
                    Shining a light on small business lending
                  </h2>
                  <p>
                    Small businesses are pillars of their communities—and of the
                    American economy.
                  </p>
                  <Button type='button'>Learn more</Button>
                </MediaBlockBody>
              </Grid>
            </Grid>
          </GridContainer>
        </section>

        <section className='usa-section'>
          <GridContainer>
            <CardGroup>
              <Card gridLayout={{ tablet: { col: 4 } }}>
                <CardHeader>
                  <h3 className='usa-card__heading'>Consumer resources</h3>
                </CardHeader>
                <CardMedia>
                  <img src='img/one.jpg' alt='' />
                </CardMedia>
                <CardBody>
                  <p>
                    We produce innovative tools and resources to help consumers
                    like you make informed financial decisions and build
                    financial skills.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button type='button'>Read more</Button>
                </CardFooter>
              </Card>
              <Card gridLayout={{ tablet: { col: 4 } }}>
                <CardHeader>
                  <h3 className='usa-card__heading'>
                    Learning through data and research
                  </h3>
                </CardHeader>
                <CardMedia>
                  <img src='img/two.jpg' alt='' />
                </CardMedia>
                <CardBody>
                  <p>
                    We publish research and information we’ve collected about
                    the consumer financial marketplace.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button type='button'>Read more</Button>
                </CardFooter>
              </Card>
              <Card gridLayout={{ tablet: { col: 4 } }}>
                <CardHeader>
                  <h3 className='usa-card__heading'>Rules of the road</h3>
                </CardHeader>
                <CardMedia>
                  <img src='img/three.jpg' alt='' />
                </CardMedia>
                <CardBody>
                  <p>
                    We create clear rules to implement the law and preserve
                    choices for consumers.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button type='button'>Read more</Button>
                </CardFooter>
              </Card>
            </CardGroup>
          </GridContainer>
        </section>

        <section className='grid-container usa-section'>
          <Grid row gap>
            <Grid tablet={{ col: 4 }}>
              <h2 className='font-heading-xl margin-top-0 tablet:margin-bottom-0'>
                A very important closing statement
              </h2>
            </Grid>
            <Grid tablet={{ col: 8 }} className='usa-prose'>
              <p>
                The tagline should inspire confidence and interest, focusing on
                the value that your overall approach offers to your audience.
                Use a heading typeface and keep your tagline to just a few
                words, and don’t confuse or mystify.
              </p>
              <p>
                Use the right side of the grid to explain the tagline a bit
                more. What are your goals? How do you do your work? Write in the
                present tense, and stay brief here. People who are interested
                can find details on internal pages.
              </p>
            </Grid>
          </Grid>
        </section>
      </main>
    </>
  );
}
