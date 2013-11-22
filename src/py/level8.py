# Learn Python -- level 8 logic
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

player1._position = [0, 3];
player2._position = [0, 7];

walls = []
for i in range(0, 10):
    walls.append(Wall([4, i]))
    walls.append(Wall([8, i]))
    walls.append(Wall([12, i]))
    walls.append(Wall([16, i]))

def at_end():
    if (player1._position[0] != 18 or
        player2._position[0] != 18):
        raise Exception("Failure")
    
        
