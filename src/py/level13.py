# Learn Python -- level 13 logic
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

player1._position = [0, 5]
player1._dropWall = True
_world.grid[player1._position[1]][player1._position[0]] = player1
player2._position = [0, 8]
player2._dropWall = True
_world.grid[player2._position[1]][player2._position[0]] = player2

pebbles = [[3, 5], [4, 5], [6, 5], [7, 5], [9, 5], [11, 5], [12, 5],
           [14, 5], [15, 5]];

walls = []
for i in range(1, 17):
    for j in range(0, 11):
        no_pebble = True
        for k in pebbles:
            if i == k[0] and j == k[1]:
                no_pebble = False
                break
        if no_pebble:
            walls.append(Wall([i, j]))

def at_end():
    if player1._position[0] != 18 or player2._position[1] != 18:
        raise Exception("Failure")
    
        
