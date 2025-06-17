import styled from 'styled-components';

export const TestsContainer = styled.div`
  .tests__container {
    display: grid;
    gap: 1.5rem;
  }

  .tests__content {
    display: grid;
    gap: 0.5rem;
  }

  .tests__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tests__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--title-color);
  }

  .tests__score {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    color: var(--text-color);
  }

  .tests__subtitle {
    display: flex;
    gap: 1rem;
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
  }

  .tests__details {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    font-size: var(--smaller-font-size);
    color: var(--text-color);
  }

  .tests__details li {
    margin-bottom: 0.25rem;
  }

  @media print {
    .tests__container {
      gap: 1rem;
    }

    .tests__title {
      font-size: 14px;
    }

    .tests__score {
      font-size: 12px;
    }

    .tests__subtitle {
      font-size: 11px;
    }

    .tests__details {
      font-size: 11px;
    }
  }
`; 