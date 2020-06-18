import styled from 'styled-components'

export const Grid = styled.div`
  margin-bottom: 8px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: minmax(min-content, 656px);
  grid-template-rows: auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
`

export const Timestamp = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-tertiary);
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-top: 8px;
  max-width: 100%;
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--bg-inset);
  margin-top: 24px;
`

export const PlayTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
