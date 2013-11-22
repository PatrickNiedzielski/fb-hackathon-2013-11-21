# Learn Python -- level 12 logic
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

player1._position = [7, 6]
_world.grid[player1._position[1]][player1._position[0]] = player1
player1._direction = _east
player1.inventory = ["Zucchini", "Cherry", "Zucchini", "Zucchini", \
                     "Strawberry", "Strawberry"]

player2._position = [9, 6]
_world.grid[player2._position[1]][player2._position[0]] = player2
player2._direction = _west
player2.inventory = ["Strawberry", "Cherry", "Zucchini", "Zucchini", \
                     "Strawberry", "Zucchini"]

potion = Potion([8,6]);

def at_end():
    if _world.grid[8][6] != None:
        raise Exception("Failure")
    
        
