import {
  Section,
  Container,
  CountryInfo,
  Loader,
  GoBackLink,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    fetchCountry(countryId)
      .then(setCountry)
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryId]);

  if (!country) {
    return;
  }
  return (
    <Section>
      <Container>
        <GoBackLink path={location?.state?.from ?? '/'} />
        <CountryInfo {...country} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
