### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.



### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame


  def checkforAce(card)          
  # def check_for_ace   [underscores between words]
    if card.value = 1            
    # if card.value() = 1   [Brackets + double = missing]
      return true
    else
      return false
    end    
    # return card.value == 1 [NB: The above could potentially be simplified]
  end


  dif highest_card(card1 card2)  
  # def highest_card(card1, card2)
  if card1.value > card2.value
    return card.name             
    # return card1.name  [card to be defined]
  else
    card2                        
    # return card2.name  [card to be defined]
  end
end
end  [#Second 'end' unnecessary]

def self.cards_total(cards)     
  # def self_cards_total(cards) (underscore!)
  total                         
  # total = 0     [total must initially be set to '0']
  for card in cards
    total += card.value
    return "You have a total of"
    # return "You have a total of #{total}" [return did not contain the actual total!]
  end                 
  # [NB return should be below the 'end', not above it}
end


```
