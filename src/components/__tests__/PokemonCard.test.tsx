import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import type { PokemonWithJapaneseName } from '../../api/pokemonWithJapaneseName';

describe('PokemonCard', () => {
  test('ポケモンカードが正しくレンダリングされる', () => {
    // Arrange: テスト用のポケモンデータを準備
    const pokemon: PokemonWithJapaneseName = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      japaneseName: 'フシギダネ',
      number: '1',
      types: [],
      abilities: [],
    };

    // Act: コンポーネントをレンダリング
    render(
      <BrowserRouter>
        <PokemonCard pokemon={pokemon} />
      </BrowserRouter>
    );

    // Assert: ポケモン名が表示されているか確認
    expect(screen.getByText('フシギダネ')).toBeInTheDocument();
    // Assert: 画像が表示されているか確認
    expect(screen.getByAltText('フシギダネ')).toBeInTheDocument();
  });
});
