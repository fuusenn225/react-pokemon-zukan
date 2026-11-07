import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button type="button" onClick={() => setIsFavorite((current) => !current)}>
      {isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
    </button>
  );
};

describe('FavoriteButton', () => {
  test('ボタンをクリックするとお気に入りに追加される', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<FavoriteButton />);

    // Act: ボタンをクリック
    const button = screen.getByRole('button', { name: 'お気に入りに追加' });
    await user.click(button);

    // Assert: ボタンのテキストが変更されているか確認
    expect(screen.getByRole('button', { name: 'お気に入りから削除' })).toBeInTheDocument();
  });
});
