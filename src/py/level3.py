# Learn Python -- level 2 logic
# Copyright (C) 2013 Cornell FB Hackathon Team.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

player1._position = [5, 6]
_world.grid[player1._position[1]][player1._position[0]] = player1
player2._position = [14, 6]
_world.grid[player2._position[1]][player2._position[0]] = player2

items = [Item("bread", [0, 2]),
         Item("mushroom", [11, 9]),
         Item("scepter", [5, 4]),
         Item("banana", [17, 3]),
         Item("cauliflower", [10, 1]),
         Item("sword", [8, 9])]

def at_end():
    if (player1.inventory.count() != 3 or
        player2.inventory.count() != 3):
        raise Exception("Failure")
