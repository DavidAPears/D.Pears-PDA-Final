require("minitest/autorun")
require_relative("testing_task_2.rb")
require_relative("card.rb")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("hearts", 6)
    @card2 = Card.new("diamonds", 1)
    @card3 = Card.new("spades", 8)
  end


  def test_check_for_ace()
    assert_equal(1, @card2.value)
  end

  def test_highest_card()
    result = CardGame.highest_card(@card3, @card1)
    assert_equal(@card3, result)
  end

  def test_cards_total()
    result = CardGame.cards_total(@card1, @card2)
    assert_equal( "You have a total of", result)
  end

end
