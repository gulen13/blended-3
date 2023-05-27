import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountry(countryId).then(setCountry);
  }, [countryId]);

  if (!country) {
    return;
  }
  return (
    <Section>
      <Container>
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
