import { Grid, GridContainer } from '@trussworks/react-uswds';
import Head from 'components/Head';
import type { ReactElement } from 'react';

export default function PortalPage(): ReactElement {
  return (
    <>
      <Head title='A portal page' />
      <div className='usa-section'>
        <GridContainer>
          <Grid row gap>
            <main className='desktop:grid-col-9 usa-prose' id='main-content'>
              <h1>A portal page</h1>

              <p>
                This page should eventually kinda sorta look like{' '}
                <a href='https://www.consumerfinance.gov/consumer-tools/debt-collection/'>
                  this
                </a>
                .
              </p>
            </main>
          </Grid>
        </GridContainer>
      </div>
    </>
  );
}
